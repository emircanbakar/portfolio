import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-start px-6 max-w-6xl mx-auto pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-gray-400 text-lg mb-4 font-mono">Hello, I am</h2>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 font-space">
                    Emircan Bakar.
                </h1>
                <h2 className="text-3xl md:text-5xl text-gray-400 font-semibold mb-8">
                    I build things for the web.
                </h2>
                <p className="max-w-xl text-gray-400 text-lg leading-relaxed mb-12">
                    I am a Frontend Developer based in Istanbul. I specialize in building
                    exceptional digital experiences. Currently, I'm focused on building
                    accessible, human-centered products.
                </p>

                <a
                    href="#projects"
                    className="inline-block border border-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
                >
                    Check out my work
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ArrowDown className="text-gray-500" />
            </motion.div>
        </section>
    );
};

export default Hero;
