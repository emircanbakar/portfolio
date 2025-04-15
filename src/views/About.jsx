import { useState } from "react";

const About = ({ isOpen, handleToggle }) => {
  const items = [
    {
      id: 1,
      text: "Hi! I'm a frontend developer who enjoys building things and constantly learning in the process. I love working in teams, adapt quickly to new environments, and communicate well with others.",
    },
    {
      id: 2,
      text: "I discovered coding during my university years, and since then, it has become one of the things I enjoy the most.",
    },
    {
      id: 3,
      text: "Throughout my career, I’ve worked with modern web technologies and built user-focused projects. I care about writing clean, maintainable, and efficient code. I'm always looking for ways to grow and improve my skills.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prev) => (prev < items.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  //TODO: add animation to the text and pagination
  return (
    <div className="flex flex-row justify-center items-center max-w-[540px] min-h-[250px] text-xl test-right text-justify  border-l-2 border-white text-white">
      <span onClick={() => handleToggle()} className="mx-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </span>
      {isOpen && (
        <div>
          <div className="flex flex-col items-center justify-center ">
            {items.map((item, index) =>
              index === currentPage ? (
                <ul key={item.id}>
                  <li>{item.text}</li>
                </ul>
              ) : null
            )}
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="px-4 py-1 disabled:opacity-40"
            >
              Previous
            </button>
            <div className="flex justify-center mt-4 gap-2">
              {items.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                    currentPage === index ? "bg-white" : "bg-gray-500"
                  }`}
                ></span>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={currentPage === items.length - 1}
              className="px-4 py-1 bg-gray-700 rounded disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
