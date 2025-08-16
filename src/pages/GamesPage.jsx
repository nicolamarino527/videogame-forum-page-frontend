import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";
import GlobalContext from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

export default function GamesPage() {
    const [games, setGames] = useState([])
    const { loading, setLoading, search } = useContext(GlobalContext)

    console.log(search);



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
