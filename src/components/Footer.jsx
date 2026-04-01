import { Github, Linkedin } from "./ui/BrandIcons";

const Footer = () => (
  <footer className="py-6 sm:py-8 border-t border-border">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-xs sm:text-sm text-muted-foreground text-center">
        © 2025 Kasth<span className="text-primary">oori</span> —All rights reserved — <span className="text-primary">Kasthoori</span>
      </span>
      <div className="flex gap-4">
        {[
          { icon: Github, label: "GitHub" },
          { icon: Linkedin, label: "LinkedIn" },
        ].map(({ icon: Icon, label }) => (
          <a key={label} href="#" className="btn-press text-muted-foreground hover:text-primary transition-colors" aria-label={label}>
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
