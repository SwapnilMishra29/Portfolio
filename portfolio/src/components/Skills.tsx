import { Card } from "@/components/ui/card";
import { Code, Database, Wrench, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"]
  },
  {
    icon: Database,
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL"]
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "Render", "REST APIs", "JWT", "Capacitor"]
  },
  {
    icon: Cpu,
    title: "Programming",
    skills: ["C++", "Python"]
  }
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e8f0ff] text-gray-800"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg"
        >
          Building across the full stack — from intuitive UIs to powerful backend architectures.
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 14 }}
              >
                <Card
                  className="p-6 border border-blue-100 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all rounded-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="px-3 py-1 rounded-full text-sm border border-blue-100 bg-blue-50 text-gray-700 hover:bg-blue-100 transition-all"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
