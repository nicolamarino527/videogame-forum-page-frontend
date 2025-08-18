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

    if (!games) {
        return <p className="text-white">Game not found...</p>;
    }

    if (loading) {
        return <p className="text-white">Loading game...</p>
    }

    const filteredGames = games.filter((game) => {
        if (!selectedPlatform) return true;
        return game.platforms.some((platform) => platform.name === selectedPlatform);
    });

    return (
        <>
            <h1>Gamepage</h1>
            <br />
            <div>
                <div>
                    <button className="btn btn-outline-light me-2" onClick={() => { setSelectedPlatform("") }}>
                        all games
                    </button>
                    <button className="btn btn-outline-light me-2" onClick={() => { setSelectedPlatform("PC") }}>
                        pc
                    </button>
                    <button className="btn btn-outline-light me-2" onClick={() => { setSelectedPlatform("PlayStation 5") }}>
                        Playstation
                    </button>
                    <button className="btn btn-outline-light me-2" onClick={() => { setSelectedPlatform("Xbox Series X") }}>
                        Xbox
                    </button>
                    <button className="btn btn-outline-light me-2" onClick={() => { setSelectedPlatform("Nintendo Switch") }}>
                        Switch
                    </button>
                </div>
            </div>
            <br />
            <br />
            <div>
                <div className="container">
                    {filteredGames.map((game) => (<GameCard key={game.id} game={game} />))}
                </div>
            </div>
        </>
    );
}