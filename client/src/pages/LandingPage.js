import React from "react";
import MarsLogo from "../assets/images/logo.png";
// import { MouseMovingCircles } from "../components/AnimatedBackground";

export default function LandingPage() {
    return (
        <div className="landing-layout" id="home" >
            <div className="landing-phrase">
                <p className="greeting">Hi there!</p>
                <span>I am</span>
                <h2 className="typing">Mars Leyva !</h2>
                <p className="intro"> I like making quality handcraft beverages, and <strong>responsive web apps</strong>!</p>
            </div>                    
            <img src={MarsLogo} width="auto" height="500px" alt="Mars Logo" />
        </div>
    );
}