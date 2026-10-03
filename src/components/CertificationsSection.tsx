import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certs = [
  {
    name: "ISO/IEC 27001:2022 Information Security Associate",
    issuer: "SkillFront",
    url: "https://www.skillfront.com/certifications/SkillFront-SFE01655c0be85f5-67872044739043.pdf",
  },
  {
    name: "Certified in Cybersecurity (CC)",
    issuer: "(ISC)²",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/AAPUCTJZYIJN",
  },
  {
    name: "Systems Security Certified Practitioner (SSCP)",
    issuer: "(ISC)²",
    url: "https://www.coursera.org/account/accomplishments/specialization/CACSR4RRANZP",
  },
  {
    name: "Blue Team Junior Analyst",
    issuer: "Security Blue Team",
    url: "https://elearning.centri.org/home/certificate/645888852",
  },
  {
    name: "Security Operations Center (SOC)",
    issuer: "Professional Certificate",
    url: "https://www.coursera.org/account/accomplishments/verify/SG9SGF3KVMEA",
  },
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
            <motion.a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="cyber-card group hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <Award className="w-8 h-8 text-primary" />
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-mono text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {c.name}
              </h3>
              <p className="text-xs font-mono text-muted-foreground">{c.issuer}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
