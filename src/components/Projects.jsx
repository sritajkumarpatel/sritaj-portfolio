import React from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import ComingSoon from "./ComingSoon";
import { Zap, Star } from "lucide-react";

export default function Projects({ projects }) {
  const featuredProjects = projects?.filter((p) => p.featured) || [];
  const regularProjects = projects?.filter((p) => !p.featured) || [];

  return (
    <Section className="bg-slate-900/50">
      <div className="flex items-center gap-3 mb-6">
        <Zap className="text-purple-400" size={32} />
        <h3 className="text-3xl font-bold">Projects</h3>
      </div>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <div className="mb-12">
          {featuredProjects.length === 1 ? (
            <>
              <h4 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                <Star size={20} className="text-yellow-400" />
                Featured Project
              </h4>
              <ProjectCard project={featuredProjects[0]} gridCols={1} />
            </>
          ) : (
            <>
              <h4 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                <Star size={20} className="text-yellow-400" />
                Featured Projects
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredProjects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    gridCols={2}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Regular Projects Section */}
      {regularProjects.length > 0 && (
        <div className="mb-12">
          <h4 className="text-xl font-bold text-purple-300 mb-4">
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

      {/* Coming Soon Section */}
      <ComingSoon />
    </Section>
  );
}
