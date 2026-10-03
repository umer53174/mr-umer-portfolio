import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary text-glow">06.</span> Contact
          </h2>
          <div className="w-24 h-px bg-primary/50 mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-mono text-xl font-semibold text-foreground mb-4">Get In Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have a security concern or interested in working together? 
              Drop me a message and I'll respond within 24 hours.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:mr.umerirshad@gmail.com" className="font-mono text-sm hover:text-primary transition-colors">
                  mr.umerirshad@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-mono text-sm">Remote / Worldwide</span>
              </div>


  {/* 👇 ADD THIS NEW BLOCK FOR YOUR PHONE */}
  <div className="flex items-center gap-3 text-muted-foreground">
    <Phone className="w-5 h-5 text-primary" />
    <a href="tel:+923275757939" className="font-mono text-sm hover:text-primary transition-colors">
      +92 327 575 7939
    </a>
  </div>
            </div>

            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary hover:border-glow transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-5 min-w-0"
          >
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg font-mono text-sm text-foreground focus:border-primary focus:border-glow focus:outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg font-mono text-sm text-foreground focus:border-primary focus:border-glow focus:outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg font-mono text-sm text-foreground focus:border-primary focus:border-glow focus:outline-none transition-all resize-none"
                placeholder="Tell me about your security needs..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-lg border-glow hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
