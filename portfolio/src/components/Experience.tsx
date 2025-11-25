import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-6 bg-gradient-to-b from-[#e6f0ff] via-[#f3f6ff] to-[#fafbfc] text-gray-800"
    >
      <div className="max-w-6xl mx-auto">

        {/* ================= Header ================= */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 
          bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
        >
          Experience & Education
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base sm:text-lg"
        >
          A blend of professional experience and academic journey shaping my path
          as a full-stack developer.
        </motion.p>

        {/* ================= Main Grid ================= */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* ========= Experience Card ========= */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-full"
          >
            <Card className="p-6 rounded-2xl bg-white/90 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl shadow-md">
                  <Briefcase className="h-6 w-6" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Full Stack Developer Intern
                  </h3>

                  <p className="text-blue-600 font-medium mt-1">
                    <a href="https://coremacasia.com">CoreMacasia Technologies OPC Pvt. Ltd. (Paid)</a>
                  </p>

                  <p className="text-sm text-gray-500 mt-1">Sept 2025 – Nov 2025</p>

                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Developed scalable MERN production applications.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Built secure APIs & optimized backend performance.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Assisted in deploying client apps & Capacitor builds.
                    </li>
                  </ul>

                  <p className="text-xs text-gray-500 mt-3 italic">
                    Verification available upon request (Offer Letter)
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* ========= Education Card ========= */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-full"
          >
            <Card className="p-6 rounded-2xl bg-white/90 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl shadow-md">
                  <GraduationCap className="h-6 w-6" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Bachelor of Technology (B.Tech)
                  </h3>

                  <p className="text-blue-600 font-medium mt-1">
                    CSE — Data Science
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Oriental Institute of Science and Technology, Bhopal
                  </p>

                  <p className="text-sm text-gray-600 mt-1">2023 – 2027</p>

                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Focus on AI, ML, Web Dev, and Full-stack engineering.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Active member of college coding & development clubs.
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* ================= Achievements ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 w-full"
        >
          <Card className="p-6 rounded-2xl bg-white/90 border border-blue-100 shadow-sm hover:shadow-md 
          transition-all duration-300 max-w-4xl mx-auto">
            <div className="flex flex-wrap sm:flex-nowrap items-start gap-4">

              {/* Icon */}
              <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl shadow-md mx-auto sm:mx-0">
                <Award className="h-6 w-6" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-[260px]">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center sm:text-left">
                  Achievements & Activities
                </h3>

                {/* ===== Perfectly Aligned List ===== */}
                <ul className="space-y-4 text-sm text-gray-700">
                  {[
                    "Selected for the Smart India Hackathon (SIH) internal round for ThinkFit — an AI-driven counselling MERN platform.",
                    "Completed a paid Full Stack Developer internship at CoreMacasia Technologies.",
                    "Built and deployed multiple production-ready MERN applications.",
                    "Contributed to AI chatbot development and cross-platform app builds.",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <div className="flex items-center justify-center h-5 w-5 shrink-0 
                        rounded-full bg-blue-600 text-white text-[10px] font-bold">
                        ✓
                      </div>
                      <p className="leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </Card>
        </motion.div>

      </div>
    </section>
  );
};
