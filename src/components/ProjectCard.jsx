import React from "react";
import { motion } from "framer-motion";
import { Star, Github, ExternalLink, Eye } from "lucide-react";
import CardSection from "./CardSection";

export default function ProjectCard({ project, gridCols = 1, onOpenModal }) {
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
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-xl p-5 cursor-pointer"
      style={
        isFeatured
          ? {
              background: "linear-gradient(135deg, rgba(var(--color-accent-rgb), 0.08), rgba(var(--color-primary-rgb), 0.05))",
              border: "1px solid rgba(var(--color-accent-rgb), 0.2)",
            }
          : {}
      }
      onClick={() => onOpenModal?.(project)}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4
            className={`font-bold mb-1 ${isFeatured ? "text-xl" : "text-lg"}`}
            style={{ color: "var(--color-accent)" }}
          >
            {project.title}
          </h4>
          {isFeatured && (
            <p className="text-xs flex items-center gap-1" style={{ color: "var(--color-accent)" }}>
              <Star size={12} style={{ color: "var(--color-accent)" }} />
              Featured
            </p>
          )}
        </div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="p-1.5 rounded-lg"
          style={{
            backgroundColor: "rgba(var(--color-accent-rgb), 0.1)",
            color: "var(--color-accent)",
          }}
        >
          <Eye size={16} />
        </motion.div>
      </div>

      <p className={`mb-3 leading-relaxed line-clamp-2 ${isFeatured ? "text-sm" : "text-xs"}`} style={{ color: "var(--color-text-secondary)" }}>
        {project.description}
      </p>

      {sections.includes("keyFeatures") && (
        <CardSection title="keyFeatures" content={project.keyFeatures} isFeatured={isFeatured} />
      )}

      {sections.includes("technologies") && (
        <CardSection title="technologies" content={project.technologies} isFeatured={isFeatured} />
      )}

      <div className="flex flex-wrap gap-2 mt-3">
        {project.github && (
          <span
            className="flex items-center gap-1 px-3 py-1 rounded text-xs"
            style={{
              backgroundColor: "rgba(var(--color-accent-rgb), 0.1)",
              color: "var(--color-accent)",
            }}
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.github, "_blank");
            }}
          >
            <Github size={12} />
            GitHub
          </span>
        )}
        {isLink && project.link && (
          <span
            className="flex items-center gap-1 px-3 py-1 rounded text-xs"
            style={{
              backgroundColor: "rgba(var(--color-primary-rgb), 0.1)",
              color: "var(--color-text-secondary)",
              border: "1px solid var(--color-border)",
            }}
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.link, "_blank");
            }}
          >
            <ExternalLink size={12} />
            Live Demo
          </span>
        )}
      </div>
    </motion.div>
  );
}