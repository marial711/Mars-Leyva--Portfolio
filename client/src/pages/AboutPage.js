import ProfilePicture from "../assets/images/example-me.jpg";
import SkillsDataBar from "../components/SkillsDataBar";
import MobileSkillSection from "../components/MobileSkillSection";

export default function AboutSection() {
    return (
      <div id="about" className="about-layout" >
        <h1>About Me</h1>
        <div className="about-section-layout row">
          <div className="row">
            <div className="about-text col-lg-6 col-md-12 col-sm-12  d-flex flex-column justify-content-center gap-4">
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

            <div className="col-lg-6 col-md-12 col-sm-12 gallery-layout ">
              <img
                src={ProfilePicture}
                height="100%"
                width="auto"
                alt="Web Designer: Maria"
              />
            </div>
          </div>
        </div>

        <h2 className="text-center p-0">Check out my skills!</h2>
        <div className="row d-flex flex-column justify-content-around align-items-center gap-3"> 
          <SkillsDataBar />
          <MobileSkillSection />
        </div>
       
      </div>
  );
}