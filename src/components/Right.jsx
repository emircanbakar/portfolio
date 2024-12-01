import icon from "../assets/icon.png";

const Right = () => {
  return (
    <div className="right">
      <div className="projects">
        <span>Recent projects</span>
        <div className="project-container">
          <img src={icon} alt="" />
          <span>E-commerce Website</span>
        </div>
      </div>
      <div className="experience">
        <div className="job-card">
          <span className="job-company">Jotform - UI Developer</span>
          <span className="job-date">Aug / Sep - 2023 - Internship</span>
        </div>
        <div className="job-card">
          <span className="job-company">
            LDAP BT - System Solutions Support
          </span>
          <span className="job-date">July / Sep - 2022 - Internship</span>
        </div>
      </div>
    </div>
  );
};

export default Right;
