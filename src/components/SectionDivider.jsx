import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionDivider = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="flex items-center justify-center py-2">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-px w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-center"
      />
    </div>
  );
};

export default SectionDivider;
