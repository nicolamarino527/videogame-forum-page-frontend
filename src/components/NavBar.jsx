import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";
import logo from "../assets/logo.png"




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
            <nav className="navbar navbar-expand-sm navbar-dark ">
                <div className="container-fluid">
                    <Link to={"/"} className="nav-link active" aria-current="page"><img className="logo" src={logo} alt="" /></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 nav-selection d-flex justify-content-center">
                                <li className="nav-item">
                                    <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/games"} className="nav-link">Games</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/info"} className="nav-link">Info</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/becameMember"} className="nav-link">Became Member</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <form className="search-box" onClick={handleSubmit}>
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Search a game..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <button className="search-btn" type="submit">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}