const Experience = ({ isOpen, handleToggle }) => {
  return (
    <div className="flex max-w-[540px] min-h-[250px] text-xl test-right text-justify  border-l-2 border-white text-white">
      <span className="mx-6" onClick={() => handleToggle()}>
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
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>
      </span>
      {isOpen && (
        <p>
          {
            "I continuously improve myself in frontend development through personal projects, training, and professional experience. Currently, I work as a Frontend Developer at Istanbul Metropolitan Municipality, where I build user-focused interfaces and apply modern web technologies in real-world projects."
          }
        </p>
      )}
    </div>
  );
};

export default Experience;
