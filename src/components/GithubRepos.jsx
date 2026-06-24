import React from "react";
import { motion } from "framer-motion";
import { GitBranch, Star, GitFork } from "lucide-react";
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

export default function GithubRepos({ repos }) {
  return (
    <Section>
      <div className="flex items-center gap-3 mb-6">
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
          <GitBranch style={{ color: "var(--color-primary)" }} size={32} />
        </motion.div>
        <h3 className="text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
          GitHub Repos
        </h3>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-4"
      >
        {repos.map((repo, index) => (
          <motion.a
            key={index}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-card rounded-xl p-6 block"
          >
            <h4 className="font-semibold mb-2" style={{ color: "var(--color-primary)" }}>
              {repo.name}
            </h4>
            <p className="text-sm mb-4 line-clamp-2" style={{ color: "var(--color-text-secondary)" }}>
              {repo.description || "No description available"}
            </p>
            <div className="flex items-center gap-4 text-xs" style={{ color: "var(--color-text-muted)" }}>
              {repo.language && (
                <span className="flex items-center gap-1">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor:
                        repo.language === "JavaScript"
                          ? "#f1e05a"
                          : repo.language === "TypeScript"
                            ? "#3178c6"
                            : repo.language === "Python"
                              ? "#3572A5"
                              : repo.language === "Java"
                                ? "#b07219"
                                : "#6e7681",
                    }}
                  />
                  {repo.language}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Star size={12} /> {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <GitFork size={12} /> {repo.forks_count}
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}