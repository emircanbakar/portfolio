import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <span className="contact-title"> {"<contact>"} </span>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/emircan-b-9b94b621b/"
          target="_blank"
          className="contact-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/emircanbakar"
          className="contact-link"
          target="_blank"
        >
          Github
        </a>
        <a
          href="/emircan_bakar_cv.pdf"
          className="contact-link"
          target="_blank"
          download
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
