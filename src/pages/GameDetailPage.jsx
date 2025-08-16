import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

export default function GameDetailPage() {
    const [game, setGame] = useState();
    const { id } = useParams();
    const { loading, setLoading } = useContext(GlobalContext)

    const fetchGameDetail = () => {
        setLoading(true)
        axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
            .then((response) => {
                console.log("Fetching game detail");
                const { data } = response
                setGame(data)
            })
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
    }

    console.log(game);

    useEffect(() => {
        fetchGameDetail()
    }, [id])


    if (!game) {
        return <p className="text-white">Game not found...</p>;
    }

    if (loading) {
        return <p className="text-white">Loading game...</p>
    }

    return (
        <>
            <div className="container d-flex justify-content-center gap-2">
                <div className="card bg-dark">
                    <img className="img-fluid rounded-start" src={game.coverImage} alt={game.title} style={{ height: '200px', objectFit: 'cover' }} />
                    <div className="container m-2">
                        <h3 className="text-white">{game.title}</h3>
                        <p className="text-white">{game.releaseDate}</p>
                        <p className="text-white">{game.description}</p>
                        <h5 className="text-white">Genres:</h5>
                        <p className="text-white">{game.genres.map((genre) => (<li key={genre.id}>{genre.name}</li>))}</p>
                        <h5 className="text-white">Platforms:</h5>
                        <p className="text-white">{game.platforms.map((platform) => (<li key={platform.id}>{platform.name}</li>))}</p>
                    </div>
                </div>
                <div className="card bg-dark col-6 overflow-scroll">
                    <div className="img-fluid rounded-start" src={game.coverImage} alt={game.title} style={{ height: '200px', objectFit: 'cover' }}>
                        <ul className="list-unstyled m-2">
                            {game.discussions.map((discussion) => (
                                <li key={discussion.id} className="text-white border rounded border-secondary m-3">
                                    <div className="m-1">
                                        <strong>{discussion.title}</strong><br />
                                        <p>{discussion.content}</p>
                                        <small>{discussion.user.userName} - {new Date(discussion.date).toLocaleDateString()}</small>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div >
        </>
    );
}
