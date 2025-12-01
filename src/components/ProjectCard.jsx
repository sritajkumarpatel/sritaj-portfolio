import React from "react";
import { Star, Github, ExternalLink } from "lucide-react";
import CardSection from "./CardSection";

export default function ProjectCard({ project, gridCols = 1 }) {
  const isFeatured = project.featured === true;
  const isLink =
    isFeatured || (project.link && project.link.startsWith("http"));

  // Adjust styling based on grid layout and featured status
  let cardClasses = "glass-card backdrop-blur rounded-xl border transition-all";
  let titleClasses = "font-bold text-purple-300 mb-2";
  let descClasses = "text-gray-300 mb-4 leading-relaxed";

  if (isFeatured && gridCols === 1) {
    // Full-width featured
    cardClasses +=
      " bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 border-2 border-purple-500/40 hover:border-purple-500/60";
    titleClasses += " text-2xl";
    descClasses += " text-base";
  } else if (isFeatured && gridCols > 1) {
    // Grid featured
    cardClasses +=
      " bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 border-2 border-purple-500/40 hover:border-purple-500/60";
    titleClasses += " text-xl";
    descClasses += " text-sm";
  } else {
    // Regular projects
    cardClasses +=
      " bg-slate-800/50 p-6 border border-purple-500/20 hover:border-purple-500/40";
    titleClasses += " text-xl";
    descClasses += " text-sm";
  }

  // Get sections to display from project or use defaults
  const sections =
    project.sections ||
    (isFeatured
      ? ["keyFeatures", "technologies", "quickStart"]
      : ["technologies"]);

  return (
    <div className={cardClasses}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className={titleClasses}>{project.title}</h4>
          {isFeatured && (
            <p className="text-sm text-purple-400 flex items-center gap-2">
              <Star size={14} className="text-yellow-400" />
              Open Source Template
            </p>
          )}
        </div>
      </div>

      <p className={descClasses}>{project.description}</p>

      {sections.includes("keyFeatures") && (
        <CardSection
          title="keyFeatures"
          content={project.keyFeatures}
          isFeatured={isFeatured}
        />
      )}

      {sections.includes("technologies") && (
        <CardSection
          title="technologies"
          content={project.technologies}
          isFeatured={isFeatured}
        />
      )}

      {sections.includes("quickStart") && (
        <CardSection
          title="quickStart"
          content={project.quickStart}
          isFeatured={isFeatured}
        />
      )}

      <div className="flex flex-wrap gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-semibold transition-colors ${
              isFeatured
                ? "bg-purple-600 hover:bg-purple-700 text-white"
                : "text-purple-400 hover:text-purple-300"
            }`}
          >
            <Github size={16} />
            GitHub →
          </a>
        )}
        {isLink && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-semibold transition-colors ${
              isFeatured
                ? "bg-pink-600/20 hover:bg-pink-600/30 text-pink-300 border border-pink-500/30"
                : "text-purple-400 hover:text-purple-300"
            }`}
          >
            <ExternalLink size={16} />
            {isFeatured ? "Live Demo" : "View Project"} →
          </a>
        )}
      </div>
    </div>
  );
}
