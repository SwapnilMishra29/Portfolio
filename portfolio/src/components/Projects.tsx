import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ThinkFit",
    subtitle: "Smart India Hackathon Project (MERN)",
    description:
      "Built backend, JWT authentication, and AI chatbot for a student counselling platform. Deployed modular services on Render.",
    period: "Sept 2025 - Oct 2025",
    liveUrl: "https://frontend-1ioz.onrender.com/",
    githubUrl: "https://github.com/swapnilmishra4328-cell/SIH",
    image: "/projects/thinkfit.png",
    tags: ["MERN", "AI", "JWT", "Render"],
  },
  {
    title: "WonderLust",
    subtitle: "Property Listing Platform (MERN)",
    description:
      "Developed authentication, CRUD features, and responsive UI. Achieved a 95/100 Lighthouse accessibility score.",
    period: "Mar 2025 - Jun 2025",
   liveUrl: "https://wonderlust-gn3g.onrender.com/",
    githubUrl: "https://github.com/SwapnilMishra29/wonderLust",
    image: "/projects/wonderlust.jpg",
    tags: ["MERN", "CRUD", "Responsive UI", "Accessibility"],
  },
  {
    title: "Food Delivery Web App",
    subtitle: "MERN Stack",
    description:
      "Implemented real-time order tracking, Stripe payments, and an admin dashboard for restaurant management.",
    period: "Aug 2025 - Sept 2025",
    liveUrl: "https://food-del-frontend-60wy.onrender.com/",
    githubUrl: "https://github.com/SwapnilMishra29/FOOD-dev",
    
    image: "/projects/Tomato.jpg",
    tags: ["MERN", "Stripe", "Realtime", "Admin Panel"],
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-[#f8fafc] via-[#eef3ff] to-[#e0ecff] text-gray-800 overflow-visible"
    >
      <div className="max-w-7xl mx-auto">
        {/* ====== Section Header ====== */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg"
        >
          A few of my most recent and impactful works — compact, clean, and production-ready.
        </motion.p>

        {/* ====== Projects Grid ====== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 220, damping: 15 }}
              className="flex flex-col"
            >
              <Card className="p-0 overflow-hidden bg-white/90 border border-blue-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                {/* ==== Image ==== */}
                <div className="w-full h-36 overflow-hidden border-b border-blue-100 rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* ==== Content ==== */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium mb-2">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-3">
                      {project.description}
                    </p>

                    {/* ==== Tags ==== */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-0.5 bg-blue-50 border border-blue-100 text-gray-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ==== Buttons ==== */}
                  <div className="flex gap-2 pt-3 border-t border-blue-100">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1 border-blue-200 text-gray-700 hover:bg-gray-900 hover:text-white transition-all text-sm"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1 border-blue-200 text-gray-700 hover:bg-gray-900 hover:text-white transition-all text-sm"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
