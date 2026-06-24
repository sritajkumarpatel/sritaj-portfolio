import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
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

export default function Awards({ awards }) {
  return (
    <Section>
      <div className="flex items-center gap-3 mb-6">
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
          <Trophy style={{ color: "#fcd34d" }} size={32} />
        </motion.div>
        <h3 className="text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
          Awards & Recognition
        </h3>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4"
      >
        {awards.map((award, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                style={{ color: "#fcd34d" }}
              >
                <Trophy size={24} />
              </motion.div>
              <div>
                <h4 className="font-semibold mb-1" style={{ color: "var(--color-primary)" }}>
                  {award.title}
                </h4>
                <p className="text-sm mb-2" style={{ color: "var(--color-text-muted)" }}>
                  {award.year} {award.quarter && `• ${award.quarter}`}
                  {award.company && ` • ${award.company}`}
                </p>
                {award.description && (
                  <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                    {award.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}