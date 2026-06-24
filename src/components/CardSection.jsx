import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function CardSection({ title, content, isFeatured }) {
  if (title === "keyFeatures") {
    if (!content) return null;
    return (
      <div className="mb-6">
        <p className="text-sm mb-3 font-semibold" style={{ color: "var(--color-text-muted)" }}>
          Key Features:
        </p>
        <div className="flex flex-wrap gap-2">
          {content.map((feature) => (
            <motion.span
              key={feature}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 rounded-full text-sm"
              style={{
                backgroundColor: "rgba(var(--color-primary-rgb), 0.15)",
                color: "var(--color-primary)",
              }}
            >
              {feature}
            </motion.span>
          ))}
        </div>
      </div>
    );
  }

  if (title === "technologies") {
    if (!content) return null;
    return (
      <div className="mb-6">
        <p className="text-sm mb-3 font-semibold" style={{ color: "var(--color-text-muted)" }}>
          Technologies:
        </p>
        <div className="flex flex-wrap gap-2">
          {content.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 rounded text-xs"
              style={
                isFeatured
                  ? {
                      backgroundColor: "rgba(var(--color-text-secondary), 0.1)",
                      color: "var(--color-text-secondary)",
                      border: "1px solid var(--color-border)",
                    }
                  : {
                      backgroundColor: "rgba(var(--color-primary-rgb), 0.15)",
                      color: "var(--color-primary)",
                      border: "1px solid rgba(var(--color-primary-rgb), 0.2)",
                    }
              }
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    );
  }

  if (title === "quickStart") {
    if (!content) return null;
    return (
      <div
        className="rounded-lg p-4 mb-6"
        style={{
          backgroundColor: "rgba(var(--color-primary-rgb), 0.05)",
          border: "1px solid rgba(var(--color-primary-rgb), 0.1)",
        }}
      >
        <p className="text-sm mb-3 flex items-center gap-2" style={{ color: "var(--color-text-muted)" }}>
          <BookOpen size={16} style={{ color: "var(--color-primary)" }} />
          <strong style={{ color: "var(--color-primary)" }}>{content.title}</strong>
        </p>
        <ol className="text-sm space-y-2 ml-4 list-decimal" style={{ color: "var(--color-text-secondary)" }}>
          {content.steps?.map((step, index) => (
            <li key={index}>
              {step.text}
              {step.code && (
                <code
                  className="px-2 py-1 rounded ml-1"
                  style={{
                    backgroundColor: "rgba(var(--color-primary-rgb), 0.1)",
                    color: "var(--color-primary)",
                  }}
                >
                  {step.code}
                </code>
              )}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return null;
}