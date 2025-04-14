const Contact = ({ handleToggle, isOpen }) => {
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
            d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
          />
        </svg>
      </span>
      {isOpen && (
        <ul className="list-none justify-center items-center list-inside flex flex-col gap-12 list-style-none">
          <li>Linkedin</li>
          <li>Github</li>
          <li>Resume</li>
        </ul>
      )}
    </div>
  );
};

export default Contact;
