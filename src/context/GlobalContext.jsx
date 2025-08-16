import { createContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [loading, setLoading] = useState(false);

    return (
        <GlobalContext.Provider value={{ loading, setLoading }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;
