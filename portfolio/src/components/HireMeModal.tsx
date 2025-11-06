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
          <DialogContent className="sm:max-w-md bg-gradient-to-b from-neutral-900 via-neutral-950 to-black border border-neutral-700 shadow-[0_0_40px_rgba(0,0,0,0.6)] text-gray-100 rounded-2xl animate-in fade-in duration-300">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-blue-400 bg-clip-text text-transparent">
                Let’s Work Together 🚀
              </DialogTitle>
              <DialogDescription className="text-base pt-2 text-gray-300 leading-relaxed">
                I’m a MERN Stack Developer specializing in AI chatbot integration and modern full-stack
                applications. Open for freelance and internship opportunities — let’s build something impactful.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 pt-4">
              <a
                href="mailto:mishraswapnil610@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg border border-neutral-700 hover:border-blue-500 hover:bg-black transition-all"
              >
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <div className="font-medium text-gray-100">Email</div>
                  <div className="text-sm text-gray-400">mishraswapnil610@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+919203303204"
                className="flex items-center gap-3 p-3 rounded-lg border border-neutral-700 hover:border-blue-500 hover:bg-black transition-all"
              >
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <div className="font-medium text-gray-100">Phone</div>
                  <div className="text-sm text-gray-400">+91 9203303204</div>
                </div>
              </a>

              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-1 border-neutral-700 text-blue-600 hover:bg-black hover:text-white hover:scale-105 transition-all"
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
                  className="flex-1 border-neutral-700 text-blue-600 hover:bg-black hover:text-white hover:scale-105 transition-all"
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
                className="w-full mt-2 bg-neutral-800 hover:bg-black hover:text-white hover:scale-105 transition-all"
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
