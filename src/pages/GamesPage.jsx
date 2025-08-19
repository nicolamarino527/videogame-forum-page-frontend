import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";
import GlobalContext from "../context/GlobalContext";

export default function GamesPage() {

    const [games, setGames] = useState([])
    const [selectedPlatform, setSelectedPlatform] = useState("")
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



    useEffect(() => {
        fetchGames();
    }, [search]);


    if (loading) {
        return <p className="text-white">Loading game...</p>
    }

    const filteredGames = games.filter((game) => {
        if (!selectedPlatform) return true;
        return game.platforms.some((platform) => platform.name === selectedPlatform);
    });

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
                                <i class="fa-solid fa-desktop"></i>PC
                            </button>
                            <button className={`btn text-white me-2 ${selectedPlatform === "PlayStation 5" ? "btn-active" : ""}`} onClick={() => { setSelectedPlatform("PlayStation 5") }}>
                                <i class="fa-brands fa-playstation"></i> Playstation
                            </button>
                            <button className={`btn text-white me-2 ${selectedPlatform === "Xbox Series X" ? "btn-active" : ""}`} onClick={() => { setSelectedPlatform("Xbox Series X") }}>
                                <i class="fa-brands fa-xbox"></i> Xbox
                            </button>
                            <button className={`btn text-white me-2 ${selectedPlatform === "Nintendo Switch" ? "btn-active" : ""}`} onClick={() => { setSelectedPlatform("Nintendo Switch") }}>
                                <i class="fa-solid fa-gamepad"></i>  Nintendo
                            </button>
                        </div>
                    </div>
                </div>
            </div >
            <br />
            <br />
            <div>
                <div className="container">
                    {filteredGames.length > 0 ? filteredGames.map((game) => <GameCard key={game.id} game={game} />) : (<p className="text-white">No games found with that name...</p>)}
                </div>

            </div>
            <br />
        </>
    );
}