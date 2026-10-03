import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certs = [
  { name: "ISO/IEC 27001:2022 Information Security Associate", issuer: "SkillFront" },
  { name: "Certified in Cybersecurity (CC)", issuer: "(ISC)²" },
  { name: "Systems Security Certified Practitioner (SSCP)", issuer: "(ISC)²" },
  { name: "Blue Team Junior Analyst", issuer: "Security Blue Team" },
  { name: "Security Operations Center (SOC)", issuer: "Professional Certificate" },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary text-glow">05.</span> Certifications
          </h2>
          <div className="w-24 h-px bg-primary/50 mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="cyber-card group hover:border-primary transition-colors"
            >
              <Award className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-mono text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {c.name}
              </h3>
              <p className="text-xs font-mono text-muted-foreground">{c.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
