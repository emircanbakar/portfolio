import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-4">
              <span className="text-gray-600 text-2xl font-mono">01.</span>
              About Me
            </h2>
          </div>
          <div className="md:w-2/3 text-gray-300 text-lg leading-relaxed space-y-6">
            <p>
              I am someone who strives to bring people's ideas and dreams to life
              through web-based applications. I have strong command of various
              frontend technologies, work well in teams, and adapt quickly.
            </p>
            <p>
              I actively contribute to every project I am involved in with these
              abilities. My journey in web development is driven by a passion for
              creating seamless and intuitive user experiences.
            </p>
            <div className="pt-4">
              <h3 className="text-white font-semibold mb-4">
                Technologies I work with:
              </h3>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-white">▹</span> JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">▹</span> React
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">▹</span> Tailwind/ShadCN
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">▹</span> Git
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">▹</span> Redux
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">▹</span> Maplibre GL JS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">▹</span> Next JS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">▹</span> Node JS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
