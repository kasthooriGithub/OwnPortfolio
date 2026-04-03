import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Github } from "./ui/BrandIcons";

// Import project images
import modernPortfolioImg from "../assets/projects/modern_portfolio.png";
import fitnessTrackerImg from "../assets/projects/fitness_tracker.png";
import furnitureEcommerceImg from "../assets/projects/furniture_ecommerce.png";

const projects = [
  {
    title: "Modern Portfolio",
    desc: "A responsive and high-performance portfolio website built with React and Bootstrap.",
    tags: ['React', 'Bootstrap', 'Custom CSS'],
    image: modernPortfolioImg,
    github_url: 'https://github.com/kasthooriGithub/MyPortfolio.git',
    live_url: 'https://demo.com',
  },
  {
    title: "Fitness Tracker App",
    desc: "A comprehensive web application for managing fitness goals, tracking workouts, and monitoring progress.",
    tags: ['React', 'Firebase', 'Bootstrap', 'Custom CSS'],
    image: fitnessTrackerImg,
    github_url: 'https://github.com/kasthooriGithub/FitnessTracker.git',
    live_url: 'https://fitness-tracker-blond-five.vercel.app/',
  },
  // {
  //   title: "Furniture E-Commerce Website (Elegant Furnish)",
  //   desc: "A modern e-commerce platform for selling furniture online with a focus on design and user experience.",
  //   tags: ["PHP ", "MySQL", "Html", "CSS", "JavaScript", "Bootstrap"],
  //   image: furnitureEcommerceImg,
  //   github_url: 'https://github.com/kasthooriGithub/FitnessTracker.git',
  // },

  {
  title: "ApplyFlow - Job Application Tracker",
  desc: "A modern web application that helps students and job seekers track job applications, manage interview schedules, and stay organized with follow-ups in one place.",
  tags: ['React', 'Firebase', 'Material UI', 'Bootstrap', 'Responsive Design'],
  image: applyFlowImg,
  github_url: 'https://github.com/kasthooriGithub/ApplyFlow.git',
  live_url: '', // add after deployment (Vercel / Netlify)
}
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const placeholderImg = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop";

  return (
    <section id="projects" className="py-5 py-md-5">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <span className="text-primary fw-bold text-uppercase small tracking-wider">Projects</span>
          <h2 className="display-6 fw-bold mt-2 mb-4">
            Show My work.
          </h2>
        </motion.div>

        <div className="row g-4 g-lg-5">
          {projects.map((project, i) => (
            <div key={project.title} className="col-12 col-md-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
                className="project-card h-100"
              >
                <div className="project-image-container">
                  <img
                    src={project.image || placeholderImg}
                    alt={project.title}
                    className="project-img"
                  />
                  <div className="project-overlay"></div>
                </div>

                <div className="project-content p-2">
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <h3 className="h5 fw-bold mb-0">{project.title}</h3>
                    <div className="d-flex gap-2">
                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-icon-link github"
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
                          className="project-icon-link live"
                          title="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="project-desc text-muted small mb-4">{project.desc}</p>
                  <div className="project-tags d-flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
