import React from "react";
import { motion } from "framer-motion";
import { Star, Github, ExternalLink } from "lucide-react";
import CardSection from "./CardSection";

export default function ProjectCard({ project, gridCols = 1 }) {
  const isFeatured = project.featured === true;
  const isLink = isFeatured || (project.link && project.link.startsWith("http"));

  const sections =
    project.sections ||
    (isFeatured ? ["keyFeatures", "technologies", "quickStart"] : ["technologies"]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-xl p-6"
      style={
        isFeatured
          ? {
              background: "linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.15), rgba(var(--color-accent-rgb), 0.1))",
              border: "2px solid rgba(var(--color-primary-rgb), 0.3)",
            }
          : {}
      }
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4
            className={`font-bold mb-2 ${isFeatured ? "text-2xl" : "text-xl"}`}
            style={{ color: "var(--color-primary)" }}
          >
            {project.title}
          </h4>
          {isFeatured && (
            <p className="text-sm flex items-center gap-2" style={{ color: "var(--color-primary)" }}>
              <Star size={14} style={{ color: "#fcd34d" }} />
              Open Source Template
            </p>
          )}
        </div>
      </div>

      <p className={`mb-4 leading-relaxed ${isFeatured ? "text-base" : "text-sm"}`} style={{ color: "var(--color-text-secondary)" }}>
        {project.description}
      </p>

      {sections.includes("keyFeatures") && (
        <CardSection title="keyFeatures" content={project.keyFeatures} isFeatured={isFeatured} />
      )}

      {sections.includes("technologies") && (
        <CardSection title="technologies" content={project.technologies} isFeatured={isFeatured} />
      )}

      {sections.includes("quickStart") && (
        <CardSection title="quickStart" content={project.quickStart} isFeatured={isFeatured} />
      )}

      <div className="flex flex-wrap gap-3 mt-4">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-semibold transition-colors"
            style={
              isFeatured
                ? {
                    backgroundColor: "var(--color-primary)",
                    color: "#fff",
                  }
                : {
                    color: "var(--color-primary)",
                    border: "1px solid rgba(var(--color-primary-rgb), 0.3)",
                  }
            }
          >
            <Github size={16} />
            GitHub →
          </motion.a>
        )}
        {isLink && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-semibold transition-colors"
            style={
              isFeatured
                ? {
                    backgroundColor: "rgba(var(--color-accent-rgb), 0.2)",
                    color: "var(--color-accent)",
                    border: "1px solid rgba(var(--color-accent-rgb), 0.3)",
                  }
                : {
                    color: "var(--color-primary)",
                    border: "1px solid rgba(var(--color-primary-rgb), 0.3)",
                  }
            }
          >
            <ExternalLink size={16} />
            {isFeatured ? "Live Demo" : "View Project"} →
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}