import React from "react";

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <div className="container">
                <div className="row text-center text-md-start small">
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold">GameForum</h5>
                        <p>
                            GameForum è una piattaforma dedicata agli amanti dei videogiochi: notizie, recensioni e discussioni sempre aggiornate.
                        </p>
                        <p>
                            Unisciti alla nostra community e resta sempre connesso con il mondo del gaming.
                        </p>
                        <p className="text-muted mt-2">© 2025 GameForum - Tutti i diritti riservati</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold">Community</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a
                                    href="https://discord.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white text-decoration-none"
                                >
                                    Canale Discord ufficiale
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://reddit.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white text-decoration-none"
                                >
                                    Forum Reddit
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white text-decoration-none"
                                >
                                    Blog & Annunci
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white text-decoration-none"
                                >
                                    FAQ & Supporto
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold">Contatti</h5>
                        <p>
                            Per assistenza, suggerimenti o richieste di collaborazione:
                        </p>
                        <p>Email: <a href="mailto:support@gameforum.com" className="text-white text-decoration-none">support@gameforum.com</a></p>
                        <p>Tel: +39 123 456 7890</p>
                        <p>Indirizzo: Via dei Videogiochi 123, Roma, Italia</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}