import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "BSc. Degree in computer science",
    institution: "The Open University of Sri Lanka",
    period: "03/2024 – Present",
    desc: "Focused on software engineering, data structures, algorithms, and web technologies. Active member of the coding club and design committee.",
  },
  {
    degree: "Higher National Diploma in Information Technology",
    institution: "SLIATE, Jaffna",
    period: "08/2023 – 07/2025",
    desc: "Completed with a focus on Information Technology, covering programming, database management, and web development.",
  },
  {
    degree: "Diploma in Computer Application and Office Management",
    institution: "ECity College",
    period: "2022",
    desc: "Learning about computer applications and office management. Gained skills in Microsoft Office, and office administration.",
  },
  {
    degree: "High School and Advanced Levels",
    institution: "Jaffna Hindu Ladies College",
    period: "2019 - 2021",
    desc: "Studied for the GCE Advanced Level examination in the Physical science stream, achieving a pass in all subjects.",
  },
];

const experience = [
  {
    company: 'Woocurs Technologies Pvt (Ltd)',
    role: 'Software Developer Intern',
    period: 'Aug 2025 - Feb 2026',
    description: 'Developing and maintaining responsive web applications using React, Bootstrap, and Firebase. Focused on performance optimization and writing clean, scalable code.',
  },
  {
    company: 'Bank of Ceylon – Thirunelvely',
    role: 'Banking Trainee (School Leaver Program)',
    period: 'Feb 2023 - Aug 2023',
    description: 'Developed communication, teamwork, and professional workplace behavior.',
  },
  {
    company: 'Academic Project - Online Furniture Platform',
    role: 'Final Year Project',
    period: '2021 - Present',
    description: 'Developed an online furniture platform using HTML, CSS, JavaScript, and PHP. Designed responsive user interfaces for product browsing and shopping experience.',
  }
];

const EducationSection = () => {
  const [activeTab, setActiveTab] = useState("experience"); // toggle state

  const renderExperienceItem = (exp, i) => (
    <motion.div
      key={exp.role}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: i * 0.1, duration: 0.4 }}
      className="p-4 sm:p-6 rounded-2xl bg-card border border-border card-lift mb-6"
    >
      <div className="flex items-center gap-2 text-primary mb-1">
        <Calendar size={14} />
        <span className="text-xs sm:text-sm font-medium">{exp.period}</span>
      </div>
      <h3 className="font-display font-bold text-base sm:text-lg">{exp.role}</h3>
      <p className="text-primary/80 text-xs sm:text-sm font-medium mb-2">{exp.company}</p>
      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{exp.description}</p>
    </motion.div>
  );

  const renderEducationItem = (edu, i) => (
    <motion.div
      key={edu.degree}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: i * 0.1, duration: 0.4 }}
      className="p-4 sm:p-6 rounded-2xl bg-card border border-border card-lift mb-6"
    >
      <div className="flex items-center gap-2 text-primary mb-1">
        <GraduationCap size={8} />
        <span className="text-xs sm:text-sm font-medium">{edu.period}</span>
      </div>
      <h3 className="font-display font-bold text-base sm:text-lg">{edu.degree}</h3>
      <p className="text-primary/80 text-xs sm:text-sm font-medium mb-2">{edu.institution}</p>
      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{edu.desc}</p>
    </motion.div>
  );

  return (
    <section id="education" className="py-16 md:py-24 bg-card/50">
      <div className="section-container">
        {/* Toggle Buttons */}
        <div className="flex gap-4 mb-10 justify-center">
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeTab === "experience" ? "bg-primary text-white" : "bg-card border border-border text-primary"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeTab === "education" ? "bg-primary text-white" : "bg-card border border-border text-primary"
            }`}
          >
            Education
          </button>
        </div>

        {/* Content */}
        <AnimatePresence>
          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-6 text-center md:text-left">Work Experience</h2>
              {experience.map(renderExperienceItem)}
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-6 text-center md:text-left">Academic Background</h2>
              {education.map(renderEducationItem)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EducationSection;