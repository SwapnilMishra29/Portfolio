import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const HireMeModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-md bg-gradient-to-b from-white via-slate-50 to-blue-50 border border-slate-200 shadow-[0_4px_40px_rgba(0,0,0,0.08)] rounded-2xl p-6 animate-in fade-in duration-300">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Let’s Build Something Amazing 🚀
              </DialogTitle>
              <DialogDescription className="text-base pt-2 text-slate-600 leading-relaxed">
                I’m a <span className="font-medium text-blue-600">MERN Stack Developer</span> with a focus on building scalable,
                 user-centric web applications and integrating AI-powered features.
                  I’m currently open to freelance and internship opportunities where I can contribute to innovative,
                 high-impact projects.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                href="mailto:mishraswapnil610@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50 transition-all"
              >
                <Mail className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="font-medium text-slate-800">Email</div>
                  <div className="text-sm text-slate-500">
                    mishraswapnil610@gmail.com
                  </div>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                href="tel:+919203303204"
                className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50 transition-all"
              >
                <Phone className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="font-medium text-slate-800">Phone</div>
                  <div className="text-sm text-slate-500">+91 9203303204</div>
                </div>
              </motion.a>

              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-1 border-slate-300 text-blue-600 bg-white hover:bg-blue-50 hover:text-black hover:scale-105 transition-all"
                >
                  <a
                    href="https://linkedin.com/in/swapnil-mishra70"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-1 border-slate-300 text-slate-700 bg-white hover:bg-blue-50hover:scale-105 transition-all"
                > 
                  <a
                    href="https://github.com/SwapnilMishra29"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>

              <Button
                onClick={() => setOpen(false)}
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium hover:scale-105 transition-all rounded-xl"
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
