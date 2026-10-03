import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Bug, Lock, Network, Download } from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const highlights = [
  { icon: ShieldCheck, label: "Threat Detection & Monitoring", desc: "SIEM-based log analysis and alert triage" },
  { icon: Bug, label: "Incident Investigation", desc: "Phishing & Windows-based incident handling" },
  { icon: Lock, label: "Detection Engineering", desc: "Building detection use cases in Splunk & Sentinel" },
  { icon: Network, label: "Incident Response", desc: "Rapid threat detection and mitigation" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary text-glow">01.</span> About Me
          </h2>
          <div className="w-24 h-px bg-primary/50 mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="cyber-card">
              <div className="font-mono text-xs text-muted-foreground mb-4">
                <span className="text-primary">root@portfolio</span>:<span className="text-accent">~</span>$ cat about.txt
              </div>
              <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
                <p>
                  Aspiring SOC Analyst with an MS in Cyber Security and a background in software development
                  and QA testing. Hands-on experience building detection use cases in a self-directed Splunk/Sentinel
                  home lab, investigating simulated phishing and Windows-based incidents, and developing
                  DeepFuseMal, a deep learning model for Android malware detection. Comfortable with log
                  analysis, MITRE ATT&CK mapping, and Python-based automation; seeking to apply a strong
                  technical foundation to entry-level SOC operations.
                </p>
              </div>
              <a
                href={resumeAsset.url}
                target="_blank"
                rel="noopener noreferrer"
                download="Muhammad-Umer-Resume.pdf"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-mono text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="cyber-card group hover:border-primary transition-colors"
              >
                <item.icon className="w-8 h-8 text-primary mb-3 group-hover:text-glow transition-all" />
                <h3 className="font-mono text-sm font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
