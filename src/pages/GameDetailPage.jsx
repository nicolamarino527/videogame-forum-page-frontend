import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GameDetailPage() {
    const [game, setGame] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
            .then(res => setGame(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!game) {
        return <p>loading game</p>;
    }

    return (
        <>
            <div className="container d-flex justify-content-center">
                <div>
                    <img src={game.coverImage} alt={game.title} style={{ height: '400px', objectFit: 'cover' }} />
                    <h1>{game.title}</h1>
                    <p className="text-white">{game.releaseDate}</p>
                    <p className="text-white">{game.description}</p>
                    <p className="text-white">{game.genres.map((genre) => (<li key={genre.id}>{genre.name}</li>))}</p>
                    <p className="text-white">{game.platforms.map((platform) => (<li key={platform.id}>{platform.name}</li>))}</p>
                </div>
            </div>
        </>
    );
}
