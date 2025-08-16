import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";
import GlobalContext from "../context/GlobalContext";

export default function GamesPage() {
    const [games, setGames] = useState([]);
    const { loading, setLoading } = useContext(GlobalContext);

    const fetchGames = () => {
        setLoading(true);
        axios.get(`${import.meta.env.VITE_API_URL}`)
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
    }, []);

    if (!games) {
        return <p className="text-white">Game not found...</p>;
    }

    if (loading) {
        return <p className="text-white">Loading game...</p>
    }

    return (
        <>
            <h1>gamepage</h1>
            <div>
                <div className="container">
                    {games.map((game) => (<GameCard key={game.id} game={game} />))}
                </div>
            </div>
        </>
    );
}
