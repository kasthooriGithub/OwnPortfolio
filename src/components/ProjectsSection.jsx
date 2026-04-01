import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Github } from "./ui/BrandIcons";

const projects = [
  {
    title: "Modern Portfolio",
    desc: "A responsive and high-performance portfolio website built with React and Bootstrap.",
    tags: ['React', 'Bootstrap', 'Custom CSS'],
    color: "from-primary/20 to-accent",
    github_url: 'https://github.com',
    live_url: 'https://demo.com',
  },
  {
    title: "Fitness Tracker App",
    desc: "A comprehensive web application for managing fitness goals, tracking workouts, and monitoring progress.",
    tags: ['React', 'Firebase', 'Bootstrap','Custom CSS'],
    color: "from-accent to-secondary",
    github_url: 'https://github.com/kasthooriGithub/FitnessTracker.git',
    live_url: 'https://demo.com',
  },
  {
    title: "Furniture E-Commerce Website (Elegant Furnish)",
    desc: "A modern e-commerce platform for selling furniture online with a focus on design and user experience.",
    tags: ["PHP ", "MySQL", "Html", "CSS", "JavaScript", "Bootstrap"],
    color: "from-secondary to-primary/20",
     github_url: 'https://github.com/kasthooriGithub/FitnessTracker.git',
  },
  // {
  //   title: "Student Assignment Recorder",
  //   desc: "A web app for students and teachers to submit, track, and manage academic assignments with deadline reminders.",
  //   tags: ["React", "Node.js", "MongoDB"],
  //   color: "from-primary/10 to-accent",
  // },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Projects</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mt-3 mb-8 md:mb-12">
            Selected work.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="group rounded-2xl border border-border bg-card overflow-hidden card-lift"
            >
              <div className={`h-40 sm:h-48 md:h-56 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] pointer-events-none" />
                <div className="w-3/4 h-20 sm:h-28 rounded-xl bg-background/40 backdrop-blur-md border border-white/20 shadow-2xl z-10" />
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 className="font-display font-bold text-sm sm:text-lg leading-tight">{project.title}</h3>
                  <div className="flex gap-2 shrink-0">
                    {project.github_url && (
                      <a 
                        href={project.github_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 rounded-full bg-accent/50 text-muted-foreground hover:text-foreground hover:bg-accent transition-all border border-border/40"
                        title="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live_url && (
                      <a 
                        href={project.live_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all border border-primary/20"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-md bg-accent text-accent-foreground border border-border/40">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
