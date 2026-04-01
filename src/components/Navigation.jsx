import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const links = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    setTimeout(() => {
      if (id === "Home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(id.toLowerCase());
        if (el) {
          const navHeight = 64;
          const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-14 sm:h-16">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-display font-bold text-base sm:text-lg tracking-tight text-foreground">
          Kasth<span className="text-primary">oori</span>
        </button>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors story-link"
            >
              <span>{link}</span>
            </button>
          ))}
          <button
            onClick={toggleDark}
            className="btn-press w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle dark mode"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={dark ? "moon" : "sun"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {dark ? <Moon size={16} /> : <Sun size={16} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <button
            onClick={() => scrollTo("Contact")}
            className="btn-press px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold"
          >
            Let's Talk
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleDark}
            className="btn-press w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button className="text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            className="md:hidden glass-nav border-t border-border/50"
          >
            <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground py-3 px-3 rounded-lg hover:bg-accent/50 transition-colors active:bg-accent"
                >
                  {link}
                </button>
              ))}
              <button
                onClick={() => scrollTo("Contact")}
                className="btn-press mt-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold text-center"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
