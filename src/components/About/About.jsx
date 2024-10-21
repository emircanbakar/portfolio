import "./About.css";
import comp from "../../assets/comp.png";
import logo from "../../assets/education-logo.png"

const About = () => {
  return (
    <div>
      <div className="about">
        <span className="about-title"> {"<about/experience>"} </span>
        <div className="about-container">
          <span className="about-text">
            {
              "I'm a Frontend Developer who designs simple, impactful, and functional web interfaces tailored to users' needs. I focus on delivering aesthetic and intuitive web experiences by providing creative solutions. I stay up-to-date with technology, pay attention to details, and strive to achieve better results with every project."
            }
          </span>
          <img src={comp} alt="skills" className="about-img" />
        </div>
        <div className="job-container">
          <div className="job-card">
            <span className="job-company">Jotform</span>
            <span className="job-title">UI Developer</span>
            <span className="job-date">Aug / Sep - 2023</span>
            <p className="job-desc">
              I contributed to the development of an AI-powered style suggestion
              panel based on React and PHP. Through this project, I gained
              proficiency in React, Redux, Tailwind, and SCSS, and learned how
              to work on large-scale projects.
            </p>
          </div>
          <div className="job-card">
            <span className="job-company">LDAP BT</span>
            <span className="job-title">System Solutions Support</span>
            <span className="job-date">July / Sep - 2023</span>
            <p className="job-desc">
              I played a role in the process of solving system and network
              issues for the company's clients and affiliated firms.
            </p>
          </div>
          <div className="job-card">
            <img className="edu-img" src={logo} />
            <span className="edu-company">Istanbul Medipol University</span>
            <span className="edu-title">UI Developer</span>
            <span className="edu-date">2020 - 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
