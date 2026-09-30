import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software QA Engineer",
    company: "Companion Business Tech",
    period: "",
    description: "Performed systematic manual testing of a production transport application, identifying and documenting functional defects through structured test cases — a methodical, detail-driven investigation process directly transferable to alert triage. Tracked and prioritized defects by severity and impact, collaborating with developers on root-cause resolution — comparable to triage and escalation workflows in security operations.",
    tags: ["Manual Testing", "Test Cases", "Defect Triage", "Severity & Impact"],
  },
  {
    role: "MERN Stack Developer",
    company: "DonSol",
    period: "",
    description: "Implemented JWT and OAuth-based authentication/authorization flows, gaining practical understanding of session management, token handling, and access control — concepts directly relevant to identity-related security investigations.",
    tags: ["JWT", "OAuth", "Access Control", "Session Management"],
  },
  {
    role: "Android Developer",
    company: "",
    period: "",
    description: "Developed Android applications (Java/Kotlin) integrating third-party APIs; built and maintained a university LMS portal.",
    tags: ["Java", "Kotlin", "Third-party APIs", "LMS Portal"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 bg-secondary/20" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary text-glow">02.</span> Experience
          </h2>
          <div className="w-24 h-px bg-primary/50 mt-4" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-primary border-glow" />

                <div className="cyber-card hover:border-primary transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="font-mono text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-mono text-sm flex items-center gap-2">
                        <Briefcase className="w-3 h-3" />
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
