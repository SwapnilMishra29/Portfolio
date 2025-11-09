import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, FolderCode } from "lucide-react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#eaf1ff] to-[#dbe8ff] text-gray-900">
      {/* ====== Animated Background Blobs ====== */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-pulse top-20 left-10"></div>
        <div className="absolute w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite] bottom-20 right-10"></div>
        <div className="absolute w-64 h-64 bg-cyan-200/40 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite] top-1/3 right-1/3"></div>
      </div>

      {/* ====== Profile Image ====== */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 z-10"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 blur-2xl opacity-50 animate-pulse"></div>
          <img
            src="/profile.jpg"
            alt="Swapnil Mishra"
            className="relative w-40 h-40 rounded-full object-cover border-4 border-blue-300 shadow-[0_0_40px_rgba(147,197,253,0.4)] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </motion.div>

      {/* ====== Name ====== */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent drop-shadow-sm z-10"
      >
        Swapnil Mishra
      </motion.h1>

      {/* ====== Typewriter Role Text ====== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl md:text-2xl font-medium text-blue-600 mb-6 z-10"
      >
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "Frontend Engineer",
              "UI/UX Enthusiast",
              "MERN Developer",
              "Backend Developer",
            ],
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 30,
          }}
        />
      </motion.div>

      {/* ====== Summary ====== */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed z-10"
      >
        I’m a passionate B.Tech CSE–DS student specializing in building fast, 
        modern, and scalable web applications using the MERN stack. Experienced 
        with AI chatbot integration, cloud deployment, and user-centric design — 
        always eager to craft meaningful digital experiences.
      </motion.p>

      {/* ====== Buttons ====== */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap gap-4 justify-center z-10"
      >
        <Button
          size="lg"
          asChild
          className="bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:scale-105 transition-transform"
        >
          <a href="mailto:mishraswapnil610@gmail.com">
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </a>
        </Button>

        <Button
          size="lg"
          asChild
          className="bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:scale-105 transition-transform"
        >
          <a href="#projects">
            <FolderCode className="mr-2 h-5 w-5" />
            View Projects
          </a>
        </Button>

        <Button
          size="lg"
          asChild
          className="bg-gray-900 hover:bg-black text-white hover:scale-105 transition-transform"
        >
          <a href="https://drive.google.com/file/d/1nwRRIfwa263cd6dCekDiXysj5_RG_C0V/view?usp=drive_link" download="Swapnil_Mishra_Resume">
            <Download className="mr-2 h-5 w-5" />
            Resume
          </a>
        </Button>
      </motion.div>

      {/* ====== Social Icons ====== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex gap-6 justify-center mt-10 z-10"
      >
        <a
          href="https://github.com/SwapnilMishra29"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-blue-300 hover:bg-gray-900 hover:scale-110 transition-all"
          aria-label="GitHub Profile"
        >
          <Github className="h-6 w-6 text-blue-700" />
        </a>

        <a
          href="https://linkedin.com/in/swapnil-mishra70"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-blue-300 hover:bg-gray-900 hover:scale-110 transition-all"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="h-6 w-6 text-blue-700" />
        </a>
      </motion.div>
    </section>
  );
};
