import React from "react";
import wallImage from "../assets/wall.png";

export default function Footer() {
    return (
        <footer className="bg-black text-white position-relative mt-5">
            <div className="news-letter-box">

                <h4 className="pt-2"><i class="fa-regular fa-paper-plane"></i> Sing up to the Newsletter</h4>
                <button className="newsletter-btn btn ">Sing UP!</button>
            </div>
            <div className="wall">
                <img src={wallImage} alt="footer background" />
            </div>

            <div className="container py-5">
                <div className="row text-center text-md-start small">

                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold text-yellow">GameForum</h5>
                        <p>
                            GameForum is a platform dedicated to video game lovers:
                            news, reviews, and discussions always up to date.
                        </p>
                        <p>
                            Join our community and stay connected to the gaming world.
                        </p>
                        <br />
                        <br />
                        <p className="greish mt-2">
                            © 2025 GameForum - All rights reserved
                        </p>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold text-yellow pb-1">Community</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://discord.com" className="text-white text-decoration-none"
                                >
                                    <i className="fa-brands fa-discord me-2"></i> Official Discord
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://reddit.com"
                                    className="text-white text-decoration-none"
                                >
                                    <i className="fa-brands fa-reddit me-2"></i> Reddit Forum
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    <i className="fa-solid fa-rss me-2"></i> Blog & Announcements
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    <i className="fa-solid fa-circle-question me-2"></i> FAQ & Support
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold text-yellow">Contact</h5>
                        <p>
                            For support, feedback, or collaboration inquiries:
                        </p>
                        <p>
                            <i className="fa-solid fa-envelope me-2"></i>
                            <a
                                href="mailto:support@gameforum.com"
                                className="text-white text-decoration-none"
                            >
                                support@gameforum.com
                            </a>
                        </p>
                        <p>
                            <i className="fa-solid fa-phone me-2"></i> +39 123 456 7890
                        </p>
                        <p>
                            <i className="fa-solid fa-location-dot me-2"></i>
                            VideoGame Valley 123, Rome, Italy
                        </p>
                        <div className="mt-3">
                            <a
                                href="https://facebook.com"
                                className="text-white me-3 fs-4"
                            >
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a
                                href="https://instagram.com"
                                className="text-white me-3 fs-4"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a
                                href="https://youtube.com"
                                className="text-white me-3 fs-4"
                            >
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                            <a
                                href="https://twitter.com"
                                className="text-white fs-4"
                            >
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
