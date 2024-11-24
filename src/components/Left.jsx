import css from "../assets/css.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import mongo from "../assets/mongo.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import sass from "../assets/sass.png";
import tailwind from "../assets/tailwind.png";
import ts from "../assets/ts.png";

const Left = () => {
  return (
    <div className="left">
      <div className="title">
        <span>Software Developer</span>
        <span>Emircan Bakar</span>
      </div>
      <span className="about">
        {
          "I'm a Frontend Developer who designs simple, impactful, and functional web interfaces tailored to users' needs. I focus on delivering aesthetic and intuitive web experiences by providing creative solutions. I stay up-to-date with technology, pay attention to details, and strive to achieve better results with every project."
        }
      </span>
      <div className="languages">
        <div className="img-container">
          <img src={html} alt="" className="image" />
          <img src={css} alt="" className="image" />
          <img src={js} alt="" className="image" />
          <img src={react} alt="" className="image" />
          <img src={redux} alt="" className="image" />
          <img src={mongo} alt="" className="image" />
          <img src={nextjs} alt="" className="image" />
          <img src={sass} alt="" className="image" />
          <img src={tailwind} alt="" className="image" />
          <img src={node} alt="" className="image" />
          <img src={ts} alt="" className="image" />
          <img src={git} alt="" className="image" />
        </div>
      </div>
      <div className="socials">
        <span>Linkedin</span>
        <span>Github</span>
        <span>Resume</span>
      </div>
    </div>
  );
};

export default Left;
