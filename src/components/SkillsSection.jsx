import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5 & CSS3", "JavaScript", "React", "Material UI", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Java", "MySQL", "PHP"],
  },
  {
    title: "Design & Tools",
    skills: ["Git & GitHub", "Figma", "VS Code", "Canva", "Postman"],
  },
  {
    title: "Other",
    skills: ["UI/UX Design", "Responsive Design", "REST APIs", "Agile", "Problem Solving"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-16 md:py-24 bg-card/50">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Skills</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mt-3 mb-8 md:mb-12">
            Technologies I work with.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * gi, duration: 0.5 }}
              className="p-3 rounded-2xl bg-card border border-border card-lift"
            >
              <h3 className="font-display font-semibold text-lg mb-5 text-primary">{group.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + gi * 0.1 + si * 0.05, duration: 0.3 }}
                    className="px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs sm:text-sm font-medium border border-border/60 hover:border-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
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
