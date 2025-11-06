import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-b from-[#e0ecff] via-[#eef3ff] to-[#f8fafc] text-gray-800 overflow-visible"
    >
      <div className="max-w-7xl mx-auto">
        {/* ===== Section Header ===== */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent"
        >
          Experience & Education
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg"
        >
          Hands-on professional exposure and academic foundation that drive my
          growth as a full-stack developer.
        </motion.p>

        {/* ===== Experience & Education Grid ===== */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* ===== Experience Card ===== */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 220, damping: 15 }}
          >
            <Card className="p-6 rounded-2xl bg-white/90 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-tr from-blue-500 to-blue-700 text-white shadow-md shrink-0">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Full Stack Developer Intern
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    <a href="https://coremacasia.com/">CoreMacasia Technologies OPC Pvt. Ltd. (Paid)</a>
                    
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    Sept 2025 – Nov 2025
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      Built and deployed full-stack production-grade web apps
                      using the MERN stack.
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      Developed secure APIs, optimized backend performance, and
                      implemented modular frontend components.
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      Assisted in deploying client projects to production and
                      managed app builds using Capacitor.
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">
                    <em>Verification available upon request (Offer Letter)</em>
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* ===== Education Card ===== */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 220, damping: 15 }}
          >
            <Card className="p-6 rounded-2xl bg-white/90 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-tr from-blue-500 to-blue-700 text-white shadow-md shrink-0">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    Computer Science and Engineering – Data Science
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    Oriental Institute of Science and Technology, Bhopal
                  </p>
                  <p className="text-sm text-gray-600">2023 – 2027</p>
                  <ul className="space-y-1 mt-3 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      Focused on AI, Machine Learning, and Full Stack
                      Development.
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      Member of institutional development and coding clubs.
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* ===== Achievements Section ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Card className="p-6 rounded-2xl bg-white/90 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-tr from-blue-500 to-blue-700 text-white shadow-md shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Achievements & Activities
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">✓</span>
                    Selected for the <b>Smart India Hackathon (SIH)</b> internal
                    round for <b>ThinkFit</b> — an AI-driven counselling
                    platform built on the MERN stack.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">✓</span>
                    Completed a<b> paid internship </b> as a Full Stack Developer
                    at CoreMacasia Technologies.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">✓</span>
                    Built and deployed multiple production-ready MERN web
                    applications independently.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">✓</span>
                    Contributed to AI chatbot integration and cross-platform app
                    development.
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
