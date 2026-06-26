import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ComingSoon() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-xl p-8 text-center mt-8"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="inline-block mb-4"
      >
        <Sparkles style={{ color: "var(--color-primary)" }} size={48} />
      </motion.div>
      <h4 className="text-xl font-bold mb-2" style={{ color: "var(--color-primary)" }}>
        More Coming Soon
      </h4>
      <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
        I'm constantly working on new projects and exploring emerging technologies.
        Stay tuned for updates!
      </p>
    </motion.div>
  );
}