import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";

export default function GamesPage() {

    const [games, setGames] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}`)
            .then((res) => setGames(res.data))
            .catch((err) => console.error(err))
    }, [])

    console.log(games);

    return (
        <>
            <h1>gamepage</h1>
            <div>
                <div className="container">
                    {games.map((game) => (<GameCard key={game.id} game={game} />))}
                </div>
            </div>
        </>
    )
}