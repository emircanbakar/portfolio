import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    name: "harita.istanbul",
    link: "https://harita.istanbul/2d?@=28.95551,41.01431,16.06064&p=45.00000&b=0.00000&suk=&ruk=!&ms=!b281!c&o=!o2&ct=0&duk=&dwk=",
  },
  {
    name: "Coffee Shop",
    link: "https://kahvem-coffee-website.vercel.app/#home",
  },
  {
    name: "Restaurant",
    link: "https://yemekle-restaurant-website.vercel.app/#home",
  },
];

const Latest = () => {
  return (
    <div className="flex items-start w-full">
      <div className="grid grid-cols-2 gap-4 text-left">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border-2 w-[250px] border-white rounded-sm hover:border-stone-400 transition-all duration-300 ease-in-out"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-between items-center px-12 py-4 text-lg text-white transition-all duration-300 ease-in-out  hover:text-stone-400 hover:[box-shadow:inset_0_4px_20px_rgba(255,255,255,0.15)]"
            >
              {project.name} <FaArrowRight />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
