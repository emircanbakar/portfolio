import "./Project.css";

const Project = () => {
  return (
    <div className="project">
      <span className="project-title"> {"<projects>"} </span>
      <div className="project-links">
        <a
          href="https://kahvem-coffee-website.vercel.app/#home"
          target="_blank"
          className="project-link"
        >
          Coffee Brand Landing Page
        </a>
        <a
          href="https://yemekle-restaurant-website.vercel.app/#home"
          target="_blank"
          className="project-link"
        >
          Restaurant Landing Page
        </a>
        <a
          href="https://ecommerce-shop-frontend-4tjtwi6zu-emircans-projects-bbfbf17d.vercel.app/products"
          target="_blank"
          className="project-link"
        >
          E-Commerce Website
        </a>
        <a
          href="https://react-todo-seven-opal.vercel.app"
          target="_blank"
          className="project-link"
        >
          To-Do App
        </a>
      </div>
      <p>If you want to see more projects, visit and follow me on Github!</p>
    </div>
  );
};

export default Project;
