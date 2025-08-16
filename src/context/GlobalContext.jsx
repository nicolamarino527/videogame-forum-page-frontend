import { createContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")

    return (
        <GlobalContext.Provider value={{ loading, setLoading, search, setSearch }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;
