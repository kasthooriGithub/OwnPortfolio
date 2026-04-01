import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden">
      <div className="section-container w-full">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 md:gap-10 items-center">
          <div className="space-y-5 md:space-y-6 text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-sm font-medium text-accent-foreground border border-border/60">
                👋 Hello, I'm Kasthoori
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight"
            >
              <span className="gradient-text">Front-end Developer & Aspiring Full-Stack Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0 font-body leading-relaxed md:pr-4"
            >
              Crafting beautiful, functional web experiences with modern technologies.
              Passionate about clean code and intuitive design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start"
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-press px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm"
              >
                View Projects
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-press px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-border bg-card text-foreground font-semibold text-sm hover:border-primary transition-colors"
              >
                Contact Me
              </button>
              <a
                href="/resume-kasthoori.pdf"
                download
                className="btn-press px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-primary/30 bg-primary/5 text-primary font-semibold text-sm hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
              >
                <Download size={16} />
                Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center order-1 md:order-2"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-none">
              <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-3xl" />
              <div className="relative z-10 w-full rounded-[2.5rem] bg-card border border-border p-6 sm:p-10 flex flex-col items-center gap-4 sm:gap-6 card-lift">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-2xl ring-4 ring-background overflow-hidden bg-muted">
                  <img
                    src="/profile-placeholder.jpg"
                    alt="Kasthoori"
                    width={512}
                    height={512}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight text-foreground mb-1">
                    Kasthoori
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm font-medium uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full inline-block">
                    Developer
                  </p>
                </div>
                <p className="text-muted-foreground/80 text-xs sm:text-sm text-center leading-relaxed max-w-[220px]">
                 Junior Web Developer & Aspiring Full-Stack Developer
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex justify-center mt-10 md:mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
