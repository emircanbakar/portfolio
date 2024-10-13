import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <span className="about-title"> {"<about>"} </span>
      <div className="about-section">
        <p className="about-text">
          {
            "I'm a Frontend Developer who designs simple, impactful, and functional web interfaces tailored to users' needs. I focus on delivering aesthetic and intuitive web experiences by providing creative solutions. I stay up-to-date with technology, pay attention to details, and strive to achieve better results with every project."
          }
        </p>
        <div className="about-cards">
          <div className="card">HTML</div>
          <div className="card">CSS</div>
          <div className="card">JAVASCRIPT</div>
          <div className="card">REACT.JS</div>
          <div className="card">TAILWINDCSS</div>
          <div className="card">SHADCNUI</div>
          <div className="card">MUI</div>
          <div className="card">SASS</div>
          <div className="card">SCSS</div>
          <div className="card">TYPESCRIPT</div>
          <div className="card">NODE.JS</div>
          <div className="card">NEXT.JS</div>
          <div className="card">MONGODB</div>
        </div>
      </div>
    </div>
  );
};

export default About;
