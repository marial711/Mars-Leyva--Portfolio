import React from "react";
let spanishIntros = ["Hola", "Que Tal", "Buenos Dias", "Bienvenidos"]
let englishIntros = ["Hi there!", "Good Morning", "Welcome!", "Whats up!"]

export default function LandingPage() {
    return (
        <div className="landing-layout">
            {/* <div className="landing-header">
                <h1>{spanishIntros[3]}</h1>
            </div>
            <div>
                <h2>I'm Maria <span>Mars</span> Leyva</h2> 
            </div>
            <div>            
                <p>Part-time Coffee Enthsuiast aspiring to be a Full-Time Web Developer</p>
            </div>             */}
            <div className="animated-bg">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <div className="circle circle4"></div>
                <div className="circle circle5"></div>
                <div className="circle circle6"></div>
            </div>
        </div>
    );
}