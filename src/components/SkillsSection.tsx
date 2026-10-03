import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "SOC Operations",
    skills: [
      { name: "Incident Response", level: 90 },
      { name: "Log Analysis", level: 92 },
      { name: "Threat Hunting", level: 84 },
      { name: "MITRE ATT&CK Mapping", level: 88 },
    ],
  },
  {
    category: "Defensive Platforms",
    skills: [
      { name: "SIEM (Splunk / Sentinel)", level: 90 },
      { name: "SOAR Automation", level: 80 },
      { name: "EDR (Endpoint Detection)", level: 82 },
      { name: "Firewalls & IDS/IPS", level: 85 },
    ],
  },
  {
    category: "Tools & Scripting",
    skills: [
      { name: "Wireshark / Packet Analysis", level: 88 },
      { name: "Python / Bash Automation", level: 90 },
      { name: "KQL / SPL Querying", level: 86 },
      { name: "VirusTotal / Threat Intel", level: 84 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary text-glow">04.</span> Skills
          </h2>
          <div className="w-24 h-px bg-primary/50 mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + ci * 0.15 }}
              className="cyber-card"
            >
              <h3 className="font-mono text-lg font-semibold text-primary mb-6">{cat.category}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-foreground font-mono">{skill.name}</span>
                      <span className="text-xs text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + ci * 0.2 + si * 0.1, ease: "easeOut" }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
