import { Link } from "react-router-dom";
import React from "react";

export default function GameCard({ game }) {
    return (
        <>
            <Link to={`/games/${game.id}`} style={{ textDecoration: "none" }} >
                <div className="container">
                    <div className="card mb-3  bg-dark text-white fixed-card" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={game.coverImage} className="img-fluid rounded-start" alt="..." style={{ height: '200px', objectFit: 'cover' }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{game.title}</h5>
                                    <p className="card-text">{game.description}</p>
                                    <p className="card-text">{game.releaseDate}<small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    <p className="card-text">{game.genres.map((genre) => (<li key={genre.id}>{genre.name}</li>))}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link >
        </>
    )
}