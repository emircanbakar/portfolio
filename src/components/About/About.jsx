import "./About.css";
import comp from "../../assets/comp.png";

const About = () => {
  return (
    <div className="about">
      <span className="about-title"> {"<about>"} </span>
      <div className="about-container">
        <span className="about-text">
          {
            "I'm a Frontend Developer who designs simple, impactful, and functional web interfaces tailored to users' needs. I focus on delivering aesthetic and intuitive web experiences by providing creative solutions. I stay up-to-date with technology, pay attention to details, and strive to achieve better results with every project."
          }
        </span>
        <img src={comp} alt="skills" className="skill-comp" />
      </div>
    </div>
  );
};

export default About;
