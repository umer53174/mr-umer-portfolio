import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
        <Shield className="w-4 h-4 text-primary" />
        <span>&lt;mr.umer /&gt; © {new Date().getFullYear()}</span>
      </div>
      <p className="font-mono text-xs text-muted-foreground">
        Designed & Built with <span className="text-primary">Security</span> in Mind
      </p>
    </div>
  </footer>
);

export default Footer;
