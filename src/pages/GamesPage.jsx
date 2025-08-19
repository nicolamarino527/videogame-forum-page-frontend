import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";
import GlobalContext from "../context/GlobalContext";

export default function GamesPage() {

    const [games, setGames] = useState([])
    const [selectedPlatform, setSelectedPlatform] = useState("")
    const [genres, setGenres] = useState([])
    const [selectedGenre, setSelectedGenre] = useState("")
    const { loading, setLoading, search } = useContext(GlobalContext)

    console.log(search)

    const fetchGames = () => {

        const endpoint = search ? `${import.meta.env.VITE_API_URL}/search?title=${search}` : `${import.meta.env.VITE_API_URL}`

        setLoading(true);
        axios.get(endpoint)
            .then((response) => {
                console.log("Fetching games...");
                const { data } = response;
                setGames(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const fetchGenres = () => {
        setLoading(true)
        axios.get(`${import.meta.env.VITE_API_URL}/genres`)
            .then((response) => {
                console.log("fetching genres...");
                const { data } = response;
                setGenres(data)
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }



    useEffect(() => {
        fetchGames();
    }, [search]);

    useEffect(() => {
        fetchGenres()
    }, [])

    if (loading) {
        return <p className="text-white">Loading game...</p>
    }

    const filteredGames = games.filter((game) => {
        const platformFilter = selectedPlatform ? game.platforms.some((platform) => platform.name === selectedPlatform) : true;
        const genreFilter = selectedGenre ? game.genres.some((genre) => genre.name === selectedGenre) : true;

        return platformFilter && genreFilter;
    })

    return (
        <>
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                <h1>Game Page</h1>
                <br />
                <div className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center selection ">
                        <div>
                            <button className={`btn text-white me-2 ${selectedPlatform === "" ? "btn-active" : ""}`} onClick={() => { setSelectedPlatform("") }}>
                                All Games
                            </button>
                            <button className={`btn text-white me-2 ${selectedPlatform === "PC" ? "btn-active" : ""}`} onClick={() => { setSelectedPlatform("PC") }}>
                                <i className="fa-solid fa-desktop"></i>PC
                            </button>
                            <button className={`btn text-white me-2 ${selectedPlatform === "PlayStation 5" ? "btn-active" : ""}`} onClick={() => { setSelectedPlatform("PlayStation 5") }}>
                                <i className="fa-brands fa-playstation"></i> Playstation
                            </button>
                            <button className={`btn text-white me-2 ${selectedPlatform === "Xbox Series X" ? "btn-active" : ""}`} onClick={() => { setSelectedPlatform("Xbox Series X") }}>
                                <i className="fa-brands fa-xbox"></i> Xbox
                            </button>
                            <button className={`btn text-white me-2 ${selectedPlatform === "Nintendo Switch" ? "btn-active" : ""}`} onClick={() => { setSelectedPlatform("Nintendo Switch") }}>
                                <i className="fa-solid fa-gamepad"></i>  Nintendo
                            </button>
                        </div>
                    </div>
                </div>
                <br />
                <div className="d-flex justify-content-center">
                    <ul >
                        <li className="badge bg-yellow text-dark me-3 mt-1" onClick={() => setSelectedGenre()}>All</li>
                        {genres.map((genre) => <li className="badge bg-yellow text-dark me-2 mt-2" onClick={() => setSelectedGenre(genre.name)} key={genre.id}>{genre.name}</li>)}
                    </ul>
                </div>
            </div >
            <div>
                <div className="container">
                    {filteredGames.length > 0 ? filteredGames.map((game) => <GameCard key={game.id} game={game} />) : (<p className="text-white">No games found...</p>)}
                </div>
            </div>
            <br />
        </>
    );
}