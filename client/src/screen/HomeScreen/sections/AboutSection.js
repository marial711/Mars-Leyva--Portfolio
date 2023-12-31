import ProfilePicture from "../../../assets/images/example-me.jpg";
import SkillsDataBar from "../../../components/SkillsDataBar";
import MobileSkillSection from "../../../components/MobileSkillSection";

export default function AboutSection() {
    return (
      <div id="about" className="about-layout" >
        <h1>About Me</h1>
        <div className="about-section-layout row">
          <div className="row">
            <div className="about-text col-lg-6 col-md-12 col-sm-12  d-flex flex-column justify-content-center gap-4">
            <h2>My Journey</h2>
            <p>
                As a Web Design major at the University of Hartford, I've been to immerse
                myself into the dynamic world of web development, by 
                collaborating on projects with friends aswell as diving into impactful
                internships. All my expirences have enriched my understanding and have me 
                eduatie myself beyond the classroom.
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