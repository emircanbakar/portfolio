import { motion } from "framer-motion";

const experiences = [
  {
    company: "Istanbul Metropolitan Municipality",
    role: "Frontend Developer",
    period: "Present",
    description:
      "Currently working as a Frontend Developer, building modern web applications using JavaScript-based frameworks. Focusing on creating responsive and accessible user interfaces for large-scale public services.",
  },
  {
    company: "Jotform",
    role: "UI Developer Intern",
    period: "Past",
    description:
      "Completed an internship as a UI Developer. Gained hands-on experience in developing user interfaces and collaborating with cross-functional teams.",
  },
  {
    company: "System Support",
    role: "Specialist",
    period: "2022",
    description:
      "Started professional career as a System Support specialist, handling technical issues and ensuring system stability.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto bg-stone-950/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-4">
              <span className="text-gray-600 text-2xl font-mono">02.</span>
              Experience
            </h2>
          </div>
          <div className="md:w-2/3 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative border-l border-gray-800 pl-8 pb-2">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gray-600 group-hover:bg-white transition-colors"></span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {exp.role} <span className="text-gray-500">@ {exp.company}</span>
                </h3>
                <p className="font-mono text-sm text-gray-500 mb-4">{exp.period}</p>
                <p className="text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
