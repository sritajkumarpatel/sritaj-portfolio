import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Cloud, Database, Globe, Wrench, Brain, Shield } from "lucide-react";
import Section from "./Section";

const CATEGORY_ICONS = {
  "AI Engineering & Orchestration": Brain,
  "Test Automation & Architecture": Shield,
  "Full-Stack & Cloud Infrastructure": Cloud,
  "Agile Leadership & Process": Globe,
  "Frontend": Globe,
  "Backend": Database,
  "DevOps & Cloud": Cloud,
  "AI & ML": Brain,
  "Testing": Shield,
  "Tools": Wrench,
  "Programming Languages": Code2,
  "Frameworks": Cpu,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function TechStack({ techStacks }) {
  const categories = Object.entries(techStacks || {});

  return (
    <Section>
      <div className="flex items-center gap-3 mb-8">
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
        className="grid md:grid-cols-2 gap-6"
      >
        {categories.map(([category, skills], index) => {
          const IconComponent = CATEGORY_ICONS[category] || Code2;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    backgroundColor: "rgba(var(--color-primary-rgb), 0.15)",
                  }}
                >
                  <IconComponent size={20} style={{ color: "var(--color-primary)" }} />
                </div>
                <h4 className="text-lg font-semibold" style={{ color: "var(--color-primary)" }}>
                  {category}
                </h4>
              </div>

              <div className="space-y-3">
                {skills.map((skill, skillIndex) => {
                  const skillName = typeof skill === "string" ? skill : skill.name;
                  const proficiency = typeof skill === "object" && skill.proficiency ? skill.proficiency : null;
                  const baseDelay = skillIndex * 0.05;

                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: baseDelay }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <motion.span
                          whileHover={{ x: 5 }}
                          className="text-sm font-medium cursor-default"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {skillName}
                        </motion.span>
                        {proficiency && (
                          <span
                            className="text-xs font-medium px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: "rgba(var(--color-primary-rgb), 0.1)",
                              color: "var(--color-primary)",
                            }}
                          >
                            {proficiency}%
                          </span>
                        )}
                      </div>
                      {proficiency && (
                        <div
                          className="h-1.5 rounded-full overflow-hidden"
                          style={{
                            backgroundColor: "rgba(var(--color-primary-rgb), 0.1)",
                          }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: baseDelay + 0.2, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{
                              background: "linear-gradient(to right, var(--color-primary), var(--color-accent))",
                            }}
                          />
                        </div>
                      )}
                      {!proficiency && (
                        <div
                          className="h-1 rounded-full"
                          style={{
                            background: "linear-gradient(to right, var(--color-primary), var(--color-accent))",
                            opacity: 0.3,
                          }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
