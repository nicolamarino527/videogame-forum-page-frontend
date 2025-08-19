import React from "react";
import skgImage from '../assets/skg.png';
import ggImage from '../assets/ggLucy.png';
import dkImage from '../assets/dkBananza.png'
import tImage from '../assets/terraria.png';
import bo7image from '../assets/bo7.png';
import gtaImage from '../assets/gta6.png'
import bf6 from "../assets/bf6.png"

export default function Home() {
    return (
        <>
            {/* <div className="jumbo">
                <img src={bf6} alt="" />
            </div> */}
            <div className="container">
                <br />
                <br />
                <br />
                <section>
                    <h1 className="my-3">Homepage</h1>
                    <div className="card mb-5 bg-transparent  text-white">
                        <img
                            src={skgImage}
                            className="card-img-top"
                            alt="..."
                            style={{ height: '400px', objectFit: '' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">Stop Killing Games</h5>
                            <p className="card-text">
                                "Stop Killing Games" is a consumer movement started to challenge the legality of publishers destroying video games...
                            </p>
                            <p className="card-text">
                                <small className="text-body-transparent ">Contact us: rosswscott@gmail.com</small>
                            </p>
                        </div>

                    </div>
                </section>

                <h3 className="m-3"> POPULAR</h3>
                <section className="d-flex justify-content-around">
                    <div className="card col-md-5  mb-5 bg-transparent text-white">
                        <img
                            src={ggImage}
                            className="card-img-top"
                            alt="..."
                            style={{ height: '220px', objectFit: 'cover' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title text-yellow">Arcsys is preparing “something big” for Guilty Gear Strive</h5>
                            <p className="card-text">
                                Given that they’re also developing Marvel Tokon: Fighting Souls, it seems like there’s a lot going on at ArcSys right now — and, according to Miyauchi, that includes exciting new updates for Strive.
                            </p>
                            <p className="card-text">
                                <small className="text-body-transparent ">by
                                    Virginia Glaze
                                    Published: Jul 11, 2025, 00:03</small>
                            </p>
                        </div>
                    </div>
                    <div className="card col-md-5  mb-5 bg-transparent  text-white">
                        <img
                            src={dkImage}
                            className="card-img-top"
                            alt="..."
                            style={{ height: '220px', objectFit: 'cover' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title text-yellow">Donkey Kong Bananza review: An instant classic bursting with replayability</h5>
                            <p className="card-text">
                                Considering the Switch 2 has already posted absurd sales, it didn’t need another system seller after Mario Kart World, but that’s exactly what Donkey Kong Bananza is.
                            </p>
                            <p className="card-text">
                                <small className="text-body-transparent ">by
                                    Joe Pring
                                    Published: Jul 16, 2025, 14:00</small>
                            </p>
                        </div>
                    </div>



                </section>
                <section className="d-flex justify-content-around">
                    <div className="card col-md-5  mb-5 bg-transparent  text-white">
                        <img
                            src={tImage}
                            className="card-img-top"
                            alt="..."
                            style={{ height: '220px', objectFit: 'cover' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title text-yellow">Terraria console commands on PC: How to use console commands</h5>
                            <p className="card-text">
                                Players trying to streamline their Terraria experience must use console commands, as they can help them save time while keeping the chaos under control.
                            </p>
                            <p className="card-text">
                                <small className="text-body-transparent ">by
                                    Ava Thompson-Powell
                                    Updated: Jul 17, 2025, 19:17</small>
                            </p>
                        </div>
                    </div>
                    <div className="card col-md-5  mb-5 bg-transparent  text-white">
                        <img
                            src={bo7image}
                            className="card-img-top"
                            alt="..."
                            style={{ height: '220px', objectFit: 'cover' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title text-yellow">Everything we know about Call of Duty: Black Ops 7 after release date leak</h5>
                            <p className="card-text">
                                Like clockwork, Activision drops a new Call of Duty game each and every year. The annualized FPS series has become a cultural juggernaut as a result, with each new installment selling millions of units without fail.
                            </p>
                            <p className="card-text">
                                <small className="text-body-transparent ">by
                                    Brad Norton
                                    Updated: Jul 17, 2025, 17:57</small>
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="card mb-5 bg-transparent  text-white">
                        <img
                            src={gtaImage}
                            className="card-img-top"
                            alt="..."
                            style={{ height: '450px', objectFit: '' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title text-yellow">Will GTA6 be the best game ever?</h5>
                            <p className="card-text">
                                I hope so, the game will cost around 100$ and my pc can't handle the game so i relly hope will be the best game of my life
                            </p>
                            <p className="card-text">
                                <small className="text-body-transparent ">by me</small>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}