import { motion } from "framer-motion";
import { Shield, Terminal, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid bg-scanline overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 text-primary font-mono text-xs opacity-10"
        >
          {"01001000 01000001 01000011 01001011"}
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-40 right-20 text-primary font-mono text-xs opacity-10"
        >
          {"ssh root@secure.server"}
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 text-accent font-mono text-xs"
        >
          {">>> nmap -sV target"}
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full bg-secondary/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="font-mono text-xs text-muted-foreground">STATUS: AVAILABLE FOR HIRE</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-mono font-bold mb-6"
        >
          <span className="text-muted-foreground">{">"} </span>
          <span className="text-foreground">Cyber</span>
          <span className="text-primary text-glow">Security</span>
          <br />
          <span className="text-foreground">Professional</span>
          <span className="text-primary animate-blink border-r-2 ml-1" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl mx-auto mb-10"
        >
          Securing digital frontiers through penetration testing, vulnerability assessment, 
          and building resilient security architectures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-lg border-glow hover:opacity-90 transition-opacity"
          >
            <Terminal className="w-4 h-4" />
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground font-mono rounded-lg hover:border-primary hover:border-glow transition-all"
          >
            <Shield className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-primary opacity-50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
