import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

import wallImage from "../assets/wall.png"

export default function NavBar() {

    const [query, setQuery] = useState("")
    const { setSearch } = useContext(GlobalContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        query.trim()
        setSearch(query)
        navigate("/games")
    }

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark d-flex">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/games"} className="nav-link" href="#">games</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onChange={handleSubmit}>
                            <input className="form-control me-2"
                                onChange={(e) => { setQuery(e.target.value) }}
                                type="search" placeholder="Search"
                                aria-label="Search"
                                value={query}
                            />
                        </form>
                    </div>
                </div>
            </nav>
            <div className='wall'>
                <img src={wallImage} alt="" />
            </div>
        </div>
    )
}