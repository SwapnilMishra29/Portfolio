import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-[#f8fafc] via-[#eef3ff] to-[#e0ecff] text-gray-800 overflow-visible"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* ====== Section Title ====== */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg"
        >
          I'm open to freelance work, internships, and full-time opportunities.  
          Let’s connect and build something impactful together!
        </motion.p>

        {/* ====== Contact Card ====== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-10 rounded-2xl bg-white/90 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {/* Email */}
              <a
                href="mailto:mishraswapnil610@gmail.com"
                className="flex items-start gap-4 p-5 rounded-lg border border-blue-100 hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300"
              >
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <div className="font-semibold mb-1 text-gray-900">Email</div>
                  <div className="text-sm text-gray-600">
                    mishraswapnil610@gmail.com
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919203303204"
                className="flex items-start gap-4 p-5 rounded-lg border border-blue-100 hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300"
              >
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <div className="font-semibold mb-1 text-gray-900">Phone</div>
                  <div className="text-sm text-gray-600">+91 9203303204</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/swapnil-mishra70"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-lg border border-blue-100 hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300"
              >
                <Linkedin className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <div className="font-semibold mb-1 text-gray-900">
                    LinkedIn
                  </div>
                  <div className="text-sm text-gray-600">
                    Connect professionally
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/SwapnilMishra29"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-lg border border-blue-100 hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300"
              >
                <Github className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <div className="font-semibold mb-1 text-gray-900">GitHub</div>
                  <div className="text-sm text-gray-600">
                    Explore my projects
                  </div>
                </div>
              </a>
            </div>

            {/* ====== Bottom CTA ====== */}
            <div className="mt-10 pt-8 border-t border-blue-100">
              <p className="text-gray-600 mb-5">
                Ready to collaborate or discuss an idea?
              </p>
              <Button
                size="lg"
                asChild
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <a href="mailto:mishraswapnil610@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Me a Message
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>

        
      </div>
    </section>
  );
};
