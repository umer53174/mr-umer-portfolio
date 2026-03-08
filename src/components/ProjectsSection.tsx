import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Shield, Bug, Lock, Wifi } from "lucide-react";

const projects = [
  {
    title: "VulnScanner Pro",
    description: "Automated vulnerability scanner that identifies OWASP Top 10 vulnerabilities in web applications with custom payload generation and detailed reporting.",
    tags: ["Python", "Selenium", "OWASP", "REST API"],
    icon: Bug,
    link: "#",
  },
  {
    title: "NetShield IDS",
    description: "Network intrusion detection system using machine learning for anomaly detection. Processes 10K+ packets/second with 98% accuracy.",
    tags: ["Python", "TensorFlow", "Scapy", "ELK Stack"],
    icon: Shield,
    link: "#",
  },
  {
    title: "CryptoVault",
    description: "End-to-end encrypted file storage solution with zero-knowledge architecture. Features AES-256 encryption and secure key management.",
    tags: ["Go", "React", "AES-256", "Docker"],
    icon: Lock,
    link: "#",
  },
  {
    title: "WiFi Auditor",
    description: "Wireless network security auditing toolkit for identifying rogue access points, weak encryption, and network misconfigurations.",
    tags: ["Python", "Aircrack-ng", "Bash", "Linux"],
    icon: Wifi,
    link: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary text-glow">03.</span> Projects
          </h2>
          <div className="w-24 h-px bg-primary/50 mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="cyber-card group hover:border-primary transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <project.icon className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h3 className="font-mono text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
