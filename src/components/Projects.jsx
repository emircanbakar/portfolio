import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        name: "harita.istanbul",
        description:
            "A comprehensive map application for Istanbul. Features interactive layers, search functionality, and real-time data integration.",
        tech: ["React", "Maplibre GL JS", "Redux", "API Integration", "Tailwind CSS"],
        link: "https://harita.istanbul",
        github: null,
    },
    {
        name: "Note Taker AI",
        description:
            "An AI-powered platform for PDF management and smart note-taking with vector search and Google Gemini integration.",
        tech: ["React", "Langchain / Gemini", "Convex", "Clerk", "Shadcn UI", "Nextjs"],
        link: null,
        github: "https://github.com/emircanbakar/note-taker-ai",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col md:flex-row gap-12 mb-16">
                    <div className="md:w-1/3">
                        <h2 className="text-4xl font-bold mb-6 flex items-center gap-4">
                            <span className="text-gray-600 text-2xl font-mono">03.</span>
                            Projects
                        </h2>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-gray-400 text-lg">
                            Here are some of the projects I've worked on.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-stone-900/50 border border-stone-800 p-8 flex flex-col justify-between hover:border-white/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] transition-all duration-300 group rounded-lg relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="text-4xl text-gray-700 group-hover:text-white transition-colors duration-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-10 h-10 group-hover:stroke-2 transition-all"
                                        >
                                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                    </div>
                                    <div className="flex gap-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                    {project.name}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <ul className="flex flex-wrap gap-3 text-xs font-mono text-gray-500 relative z-10">
                                {project.tech.map((tech) => (
                                    <li key={tech} className="bg-white/5 px-2 py-1 rounded group-hover:bg-white/10 transition-colors">{tech}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
