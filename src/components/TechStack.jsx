import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import Section from "./Section";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function TechStack({ techStacks }) {
  const categories = Object.entries(techStacks || {});

  return (
    <Section>
      <div className="flex items-center gap-3 mb-6">
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
          <Code2 style={{ color: "var(--color-primary)" }} size={32} />
        </motion.div>
        <h3 className="text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
          Tech Stack
        </h3>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6"
      >
        {categories.map(([category, skills], index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="glass-card rounded-xl p-6"
          >
            <h4 className="text-xl font-semibold mb-4" style={{ color: "var(--color-primary)" }}>
              {category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, skillIndex) => {
                const skillName = typeof skill === "string" ? skill : skill.name;
                return (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 rounded-full text-sm font-medium cursor-default transition-all"
                    style={{
                      backgroundColor: "rgba(var(--color-primary-rgb), 0.1)",
                      color: "var(--color-primary)",
                      border: "1px solid rgba(var(--color-primary-rgb), 0.2)",
                    }}
                  >
                    {skillName}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}