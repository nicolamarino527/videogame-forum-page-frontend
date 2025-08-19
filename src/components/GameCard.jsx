import { Link } from "react-router-dom";
import React from "react";

export default function GameCard({ game }) {
    return (
        <>
            <Link to={`/games/${game.id}`} style={{ textDecoration: "none" }} >
                <hr className="text-white" />
                <div className="container">
                    <div className="card bg-dark text-white shadow-lg border-0 rounded-3 game-card m-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={game.coverImage} className="img-fluid rounded-start" alt="..." style={{ height: '200px', objectFit: 'cover' }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title text-yellow fw-bold">{game.title}</h4>
                                    <p className="card-text small text-light">{game.description}</p>
                                    <p className="card-text"> Release: {game.releaseDate}<small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    <div className="mb-2">
                                        {game.genres.map((genre) => (
                                            <span key={genre.id} className="badge bg-yellow text-dark me-2">{genre.name}</span>
                                        ))}
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Link >
        </>
    )
}