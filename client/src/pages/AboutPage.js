import React from "react";

export default function AboutSection() {
    return (
      <div className="about-layout">
        <div className="about-header d-flex justify-content-center align-items-center">
          <h1>About Me</h1>
        </div>
        <div className="container about-section ">
          <div className="row ">
            <div className="col d-flex  flex-column justify-content-center">
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

            <div className="col container">
              <div className="row">
                <img
                  className="col"
                  src="../images/example-me.jpg"
                  height="200"
                  width="auto"
                  alt="Web Designer: Maria"
                />
                <img
                  className="col"
                  src="../images/example-a.jpg"
                  height="200"
                  width="auto"
                  alt="Random doodle"
                />
              </div>
              <div className="row">
                <img
                  className="col"
                  src="../images/example-a.jpg"
                  height="200"
                  width="auto"
                  alt="Painting of her inner mind"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div>Enter Skills Animation</div> */}
      </div>
    );
}