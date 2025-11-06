import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-gradient-to-b from-[#eef3ff] via-[#f8fafc] to-white border-t border-blue-100 text-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
        {/* Footer Text */}
        <p className="text-sm md:text-base text-gray-600">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            Swapnil Mishra
          </span>
          . Built with 💙 using React, TypeScript, and Tailwind CSS.
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 mt-2">
          <a
            href="https://github.com/SwapnilMishra29"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-blue-100 hover:border-blue-500 hover:bg-blue-50 transition-all"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 text-gray-700 hover:text-blue-600 transition-colors" />
          </a>

          <a
            href="https://linkedin.com/in/swapnil-mishra70"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-blue-100 hover:border-blue-500 hover:bg-blue-50 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-gray-700 hover:text-blue-600 transition-colors" />
          </a>

          <a
            href="mailto:mishraswapnil610@gmail.com"
            className="p-2 rounded-full border border-blue-100 hover:border-blue-500 hover:bg-blue-50 transition-all"
            aria-label="Email"
          >
            <Mail className="h-5 w-5 text-gray-700 hover:text-blue-600 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};
