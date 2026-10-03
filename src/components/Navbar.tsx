import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Removed Shield icon since we use an image now
import profileImg from "../assets/profile.jpg"; // <-- Make sure your image is here!

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* --- UPDATED LOGO & PROFILE SECTION --- */}
        <motion.a 
          href="#" 
          className="flex items-center gap-3 group cursor-pointer"
          initial="initial"
          whileHover="hover"
        >
          {/* Circular Profile Image */}
          <img 
            src={profileImg} 
            alt="Muhammad Umer" 
            className="w-10 h-10 rounded-full object-cover border-2 border-primary shadow-sm"
          />
          
          {/* Name Animation */}
          <div className="font-mono text-primary font-bold text-lg flex items-center">
            <motion.span
              variants={{
                initial: { width: "auto", opacity: 1 },
                hover: { width: 0, opacity: 0, display: "none" }
              }}
              transition={{ duration: 0.2 }}
              className="whitespace-nowrap"
            >
              MU
            </motion.span>
            
            <motion.span
              variants={{
                initial: { width: 0, opacity: 0, display: "none" },
                hover: { width: "auto", opacity: 1, display: "inline-block" }
              }}
              transition={{ duration: 0.3 }}
              className="whitespace-nowrap text-glow"
            >
              Muhammad Umer
            </motion.span>
          </div>
        </motion.a>
        {/* --- END OF UPDATED SECTION --- */}

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-sm font-bold text-muted-foreground hover:text-primary transition-colors relative group"
            >
              <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">$ </span>
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-primary">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary">$ </span>{item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;