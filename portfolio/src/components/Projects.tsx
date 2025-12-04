import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ThinkFit",
    subtitle: "Smart India Hackathon Project (MERN)",
    description:
      "Built backend, JWT authentication, and AI chatbot for a student counselling platform.",
    liveUrl: "https://frontend-1ioz.onrender.com/",
    githubUrl: "https://github.com/swapnilmishra4328-cell/SIH",
    image: "/projects/thinkfit.png",
    tags: ["MERN", "AI", "JWT", "Render"],
  },
  {
    title: "WonderLust",
    subtitle: "Property Listing Platform (MERN)",
    description:
      "Authentication, CRUD, and responsive UI with 95/100 Lighthouse score.",
    liveUrl: "https://wonderlust-gn3g.onrender.com/",
    githubUrl: "https://github.com/SwapnilMishra29/wonderLust",
    image: "/projects/wonderlust.jpg",
    tags: ["MERN", "CRUD", "Responsive UI", "Accessibility"],
  },
  {
    title: "Food Delivery Web App",
    subtitle: "MERN Stack",
    description:
      "Realtime tracking, Stripe payments, and admin dashboard.",
    liveUrl: "https://food-del-frontend-60wy.onrender.com/",
    githubUrl: "https://github.com/SwapnilMishra29/FOOD-dev",
    image: "/projects/Tomato.jpg",
    tags: ["MERN", "Stripe", "Realtime", "Admin Panel"],
  },
];


// ⭐ EXTRA PROJECTS TO SHOW WHEN BUTTON IS CLICKED
const moreProjects = [
  {
    title: "Student Depression Analysis",
    subtitle: "ML + Streamlit",
    description:
      "Machine learning project for predicting depression levels based on survey inputs.",
    liveUrl: "https://student-depression-analysis-by-swapnil.streamlit.app/",
    githubUrl: "https://github.com/SwapnilMishra29/student-depression-analysis",
    image: "/projects/Depression.png",
    tags: ["ML", "Streamlit", "Python"],
  },
  
];


export const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-[#f8fafc] via-[#eef3ff] to-[#e0ecff]"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 
          bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        {/* ===== GRID OF FIRST 3 PROJECTS ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}

          {/* SHOW EXTRA PROJECTS IF showMore === true */}
          {showMore &&
            moreProjects.map((project, index) => (
              <ProjectCard project={project} key={`more-${index}`} />
            ))}
        </div>

        {/* ====== SHOW MORE BUTTON ====== */}
        <div className="text-center mt-10">
          <Button
            size="lg"
            className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More Projects"}
          </Button>
        </div>

      </div>
    </section>
  );
};


// ⭐ REUSABLE PROJECT CARD COMPONENT
const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.015 }}
    transition={{ type: "spring", stiffness: 220, damping: 15 }}
    className="flex flex-col"
  >
    <Card className="p-0 overflow-hidden bg-white/90 border border-blue-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="w-full h-36 overflow-hidden border-b border-blue-100 rounded-t-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
          <p className="text-sm text-blue-600 font-medium mb-2">{project.subtitle}</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-blue-50 border border-blue-100 text-gray-700 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-3 border-t border-blue-100">
          <Button size="sm" variant="outline" asChild className="flex-1">
            <a href={project.liveUrl} target="_blank">
              <ExternalLink className="h-4 w-4 mr-1" /> Live
            </a>
          </Button>

          <Button size="sm" variant="outline" asChild className="flex-1">
            <a href={project.githubUrl} target="_blank">
              <Github className="h-4 w-4 mr-1" /> Code
            </a>
          </Button>
        </div>
      </div>
    </Card>
  </motion.div>
);
