import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code2, Lightbulb, Users } from "lucide-react";

const highlights = [
  { icon: Palette, title: "UI/UX Design", desc: "Creating intuitive, user-centered designs with attention to detail" },
  { icon: Code2, title: "Web Development", desc: "Building responsive applications with modern frameworks" },
  { icon: Lightbulb, title: "Problem Solver", desc: "Turning complex challenges into elegant, simple solutions" },
  { icon: Users, title: "Team Player", desc: "Collaborating effectively in agile teams and cross-functional groups" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="section-container" ref={ref}>
        <div className="grid md:grid-cols-[1.5fr_0.7fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Me
            </span>

            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mt-3 mb-5 md:mb-6">
              Designing & Developing{" "}
              <span className="text-muted-foreground">with passion.</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base font-body mb-4">
              I’m a Junior Front-End Developer passionate about building responsive and
              user-friendly web applications. I specialize in React, JavaScript,
              Bootstrap, and Material UI, creating clean and efficient interfaces
              that deliver a smooth user experience.
            </p>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base font-body mb-8 opacity-90">
              I enjoy solving real-world problems through code and continuously
              improving my skills to stay aligned with modern web development
              practices. My goal is to grow into a Full-Stack Developer and build
              scalable, high-quality applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-start md:justify-center"
          >
            <div className="flex items-center justify-center md:justify-start gap-8 sm:gap-12 md:gap-8 lg:gap-12 text-center md:text-left">
              <div>
                <h4 className="font-display font-bold text-3xl md:text-4xl text-primary mb-1">
                  3+
                </h4>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Projects Completed
                </p>
              </div>

              <div className="w-px h-12 bg-border/50"></div>

              <div>
                <h4 className="font-display font-bold text-3xl md:text-4xl text-primary mb-1">
                  1+
                </h4>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Hands-on Experience
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-10 md:mt-14">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="p-3 sm:p-6 rounded-2xl bg-card border border-border card-lift flex flex-col items-start text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-4 float-animation shrink-0">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-base mb-1.5">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;