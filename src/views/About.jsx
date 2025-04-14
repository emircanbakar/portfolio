const About = ({ isOpen, handleToggle }) => {
  return (
    <div className="flex max-w-[540px] min-h-[250px] text-xl test-right text-justify  border-l-2 border-white text-white">
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
        <p>
          {
            "Hi! I'm Emircan, a Frontend Developer passionate about building modern and user-friendly interfaces. I constantly learn and strive to create clean and efficient solutions in my projects."
          }
        </p>
      )}
    </div>
  );
};

export default About;
