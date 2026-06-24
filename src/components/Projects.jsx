import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import ComingSoon from "./ComingSoon";
import { Zap, Star } from "lucide-react";

export default function Projects({ projects }) {
  const featuredProjects = projects?.filter((p) => p.featured) || [];
  const regularProjects = projects?.filter((p) => !p.featured) || [];

  return (
    <Section>
      <div className="flex items-center gap-3 mb-6">
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
          <Zap style={{ color: "var(--color-primary)" }} size={32} />
        </motion.div>
        <h3 className="text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
          Projects
        </h3>
      </div>

      {featuredProjects.length > 0 && (
        <div className="mb-12">
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: "var(--color-primary)" }}>
            <Star size={20} style={{ color: "#fcd34d" }} />
            Featured {featuredProjects.length > 1 ? "Projects" : "Project"}
          </h4>
          <div className={featuredProjects.length > 1 ? "grid md:grid-cols-2 gap-6" : ""}>
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                gridCols={featuredProjects.length > 1 ? 2 : 1}
              />
            ))}
          </div>
        </div>
      )}

      {regularProjects.length > 0 && (
        <div className="mb-12">
          <h4 className="text-xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
            More Projects
          </h4>
          <div
            className={`grid ${regularProjects.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1"} gap-6`}
          >
            {regularProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                gridCols={regularProjects.length > 1 ? 2 : 1}
              />
            ))}
          </div>
        </div>
      )}

      <ComingSoon />
    </Section>
  );
}