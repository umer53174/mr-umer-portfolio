import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Shield, Brain, Terminal, Mail } from "lucide-react";

const projects = [
  {
    title: "DeepFuseMal",
    description: "Deep learning model for Android malware detection, fusing static and behavioral features to classify malicious applications with high accuracy.",
    tags: ["Python", "TensorFlow", "Android", "Machine Learning"],
    icon: Brain,
    link: "#",
  },
  {
    title: "SOC Home Lab",
    description: "Self-directed Splunk and Microsoft Sentinel lab with custom detection use cases for simulated phishing and Windows-based incidents.",
    tags: ["Splunk", "Sentinel", "SPL / KQL", "Windows Event Logs"],
    icon: Terminal,
    link: "#",
  },
  {
    title: "Phishing Incident Triage",
    description: "Investigation workflows for simulated phishing incidents, including email header analysis, IOC enrichment, and MITRE ATT&CK mapping.",
    tags: ["Email Headers", "VirusTotal", "MITRE ATT&CK", "Sentinel"],
    icon: Mail,
    link: "#",
  },
  {
    title: "NetShield IDS",
    description: "Network intrusion detection system using machine learning for anomaly detection. Processes 10K+ packets/second with 98% accuracy.",
    tags: ["Python", "TensorFlow", "Scapy", "ELK Stack"],
    icon: Shield,
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
