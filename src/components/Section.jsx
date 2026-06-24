import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function Section({ className = "", children, noAnimation = false }) {
  if (noAnimation) {
    return (
      <section className={`py-6 px-6 ${className}`}>
        <div className="max-w-6xl mx-auto">{children}</div>
      </section>
    );
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={sectionVariants}
      className={`py-6 px-6 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {React.Children.map(children, (child) => (
          <motion.div variants={childVariants}>{child}</motion.div>
        ))}
      </div>
    </motion.section>
  );
}