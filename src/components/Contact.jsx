import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-start text-white ">
      <span className=" text-4xl lg:text-xl text-stone-600 ">
        Get in touch!
      </span>
      <div>
        <ul className="flex flex-row py-4 gap-8 text-left list-none text-white justify-center">
          <li>
            <a href="https://www.linkedin.com/in/emircanbakar/" target="_blank">
              <FaLinkedin className="text-6xl" />
            </a>
          </li>
          <li>
            <a href="https://github.com/emircanbakar" target="_blank">
              <FaGithub className="text-6xl" />
            </a>
          </li>
          <li>
            <a href="/emircanbakar_cv.pdf" download="emircanbakar_cv.pdf">
              <FaFileAlt className="text-6xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
