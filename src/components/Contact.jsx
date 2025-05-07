import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col text-white my-10">
      <span>Get in touch!</span>
      <div>
        <ul className="flex flex-row py-4 gap-8 text-left list-none text-white justify-center">
          <li>
            <FaLinkedin className="text-6xl" />
          </li>
          <li>
            <FaGithub className="text-6xl" />
          </li>
          <li>
            <FaFileAlt className="text-6xl" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
