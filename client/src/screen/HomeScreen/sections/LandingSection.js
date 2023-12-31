import React from "react";
import HiMe from '../../../assets/images/hi.png';

export default function LandingSection() {
    return (
        <div className="landing-layout row" id="homepage">
            <div className="col-lg-7 col-md-12 col-sm-12 align-self-center">
                <div className="landing-phrase col-6">
                    <p className="greeting">Hi there! I am</p>
                    <div>
                        <h2 className="typing">Mars Leyva</h2>
                    </div>
                    <p className="intro"> I like making quality handcraft beverages, and <strong>responsive web apps</strong>!</p>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 anime-me align-self-end">
                <img src={HiMe} alt="Bitmoji of Mars" height="500px" width="500px" />
            </div>
        </div>
    );
}