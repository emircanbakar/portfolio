import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-start px-6 max-w-6xl mx-auto pt-32 pb-20">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h2 variants={itemVariants} className="text-gray-400 text-lg mb-4 font-mono">
                    Hello, I am
                </motion.h2>

                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 font-space"
                >
                    <span>
                        Emircan Bakar.
                    </span>
                </motion.h1>

                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl text-gray-400 font-semibold mb-8">
                    I build things for the <span className="text-white">web</span>.
                </motion.h2>

                <motion.p variants={itemVariants} className="max-w-xl text-gray-400 text-lg leading-relaxed mb-12">
                    I am a Frontend Developer based in Istanbul. I specialize in building
                    exceptional digital experiences. Currently, I'm focused on building
                    accessible, human-centered products.
                </motion.p>

                <motion.div variants={itemVariants}>
                    <a
                        href="#projects"
                        className="group relative inline-block px-8 py-4 text-sm font-medium overflow-hidden border border-white"
                    >
                        <span className="relative z-10 group-hover:text-black transition-colors duration-300">Check out my work</span>
                        <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;

