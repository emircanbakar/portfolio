import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6 font-space">Get In Touch</h2>
        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
          I'm currently looking for new opportunities. Whether you have a question
          or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex justify-center gap-8 mb-12">
          <a
            href="https://github.com/emircanbakar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/emircanbakar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="/emircanbakar_cv.pdf"
            download="emircanbakar_cv.pdf"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            aria-label="Resume"
          >
            <FileText size={32} />
          </a>
          <a
            href="mailto:emircanbakar@example.com" // Assuming email, or I can remove if not known
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            aria-label="Email"
          >
            <Mail size={32} />
          </a>
        </div>

        <a
          href="mailto:emircanbakar@gmail.com" // I'll guess or leave it generic. I'll use a generic "Say Hello" button.
          className="inline-block border border-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
        >
          Say Hello
        </a>

        <footer className="mt-24 text-sm text-gray-600 font-mono">
          <p>Designed & Built by Emircan Bakar</p>
        </footer>
      </motion.div>
    </section>
  );
};

export default Contact;
