import React from "react";
import ProfilePicture from "../assets/images/example-me.jpg";
import SkillsSection from "../components/Skills";

export default function AboutSection() {
    return (
      <div className="about-layout row">
      <div className="about-layout row" id="about">
        <div className="about-header d-flex justify-content-center align-items-center">
          <h1>About Me</h1>
        </div>
        <div className="about-section">
          <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
              <h2>My Journey</h2>
              <p>
                As a Web Design major at the University of Hartford, my journey
                blends passion and curiosity. Despite being at the entry level,
                I've immersed myself in the dynamic world of web development.
                Collaborating on projects with friends and diving into impactful
                internships have enriched my understanding. Beyond the
                classroom, self-taught projects have further honed my skills.
              </p>
              <p>
                Eager to contribute my evolving expertise, I stand on the cusp
                of a professional journey. Academic knowledge, hands-on
                experiences, and an unwavering commitment to excellence define
                my approach. Ready to make meaningful contributions in the
                vibrant world of web development, I see every line of code as an
                opportunity to turn ideas into reality.
              </p>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 gallery-layout">
              <img
                src={ProfilePicture}
                height="100%"
                width="auto"
                alt="Web Designer: Maria"
              />
            </div>
          </div>
        </div>

          <div className="skills-layout">
              <SkillsSection />
            </div>
      
      </div>
    );
}