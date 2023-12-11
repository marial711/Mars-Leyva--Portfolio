import React from "react";
import ProfilePicture from "../assets/images/example-me.jpg";
import SkillsCard from "../components/SkillsCard";
import SkillsDataBar from "../components/SkillsDataBar";

export default function AboutSection() {
    return (
      <div id="about">
      <div className="about-layout row" >
        <div className="about-header">
          <h1>About Me</h1>
        </div>
        <div className="about-section-layout">
          <div className="row">
            <div className="about-text col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
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

            <div className="col-lg-6 col-md-6 col-sm-12  gallery-layout">
              <img
                src={ProfilePicture}
                height="100%"
                width="auto"
                alt="Web Designer: Maria"
              />
            </div>
          </div>
        </div>
        <h2 align="center">Check out my skills!</h2>
        <div className="d-flex justify-content-around p-4">
          <div>
            <SkillsDataBar skill="HTML" skillPercent="95"/>
              <SkillsDataBar skill="Javascript" skillPercent="80" />
              <SkillsDataBar skill="ReactJS" skillPercent="75" />
              <SkillsDataBar skill="CSS" skillPercent="95" />
              <SkillsDataBar skill="Sass" skillPercent="95" />
          </div>
          <div>
              <SkillsDataBar skill="Adobe Illustrator" skillPercent="95" />
              <SkillsDataBar skill="Adobe Lightroom" skillPercent="95" />
              <SkillsDataBar skill="Adobe Photoshop" skillPercent="75" />
              <SkillsDataBar skill="Bootstrap" skillPercent="75" />
              <SkillsDataBar skill="Tailwindcss" skillPercent="75" />
          </div>
          
        </div>
      
          {/* <div className="skills">
            <SkillsCard title="Design">
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Adobe XD</li>
              <li>Adobe Lightroom</li>
              <li>UX/UI</li>
              <li>Web Responsive Design</li>
            </SkillsCard>
            <SkillsCard title="Code">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Bootstrap</li>
              <li>Tailwindcss</li>
              <li>MongoDB</li>
            </SkillsCard>
            <SkillsCard title="Management">
              <li>Social Intelligence</li>
              <li>Conflict Management</li>
              <li>Delegation</li>
              <li>Adaptablity</li>
              <li>Active Communication</li>
            </SkillsCard>
          </div> */}
      </div>
      </div>
    );
}