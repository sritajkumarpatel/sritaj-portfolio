import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cpu, Cloud, Database, Globe, Wrench, Brain, Shield, Layers, Terminal, Zap, Server } from "lucide-react";
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
  "Programming Languages": Terminal,
  "Frameworks": Cpu,
  "Databases": Database,
  "Platforms": Server,
  "DevOps": Zap,
  "Methodologies": Layers,
};

const SKILL_COLORS = [
  { bg: "rgba(var(--color-primary-rgb), 0.12)", text: "var(--color-primary)" },
  { bg: "rgba(var(--color-accent-rgb), 0.12)", text: "var(--color-accent)" },
  { bg: "rgba(16, 185, 129, 0.12)", text: "#10b981" },
  { bg: "rgba(139, 92, 246, 0.12)", text: "#8b5cf6" },
  { bg: "rgba(236, 72, 153, 0.12)", text: "#ec4899" },
  { bg: "rgba(245, 158, 11, 0.12)", text: "#f59e0b" },
];

const TECH_ICONS = {
  react: "⚛️", vue: "💚", angular: "🅰️", svelte: "🔥",
  nodejs: "🟢", python: "🐍", java: "☕", go: "🐹", rust: "🦀", typescript: "📘",
  aws: "☁️", azure: "🔷", gcp: "🌐", docker: "🐳", kubernetes: "⚙️",
  postgresql: "🐘", mongodb: "🍃", redis: "🔴", mysql: "🐬",
  jenkins: "🔧", github: "🐙", gitlab: "🦊", terraform: "🏗️",
  playwright: "🎭", selenium: "🔬", jest: "🃏", cypress: "🌲",
  langchain: "🦜", tensorflow: "🧠", pytorch: "🔥", openai: "🤖",
  scrum: "📋", agile: "🔄", devops: "🚀", ci: "♻️",
};

function getSkillIcon(name) {
  const lower = name.toLowerCase();
  for (const [key, icon] of Object.entries(TECH_ICONS)) {
    if (lower.includes(key)) return icon;
  }
  return null;
}

export default function TechStack({ techStacks }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = Object.entries(techStacks || {});
  const totalSkills = categories.reduce((sum, [, skills]) => sum + skills.length, 0);

  const filteredCategories = activeCategory === "all"
    ? categories
    : categories.filter(([cat]) => cat === activeCategory);

  return (
    <Section>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            <Code2 style={{ color: "var(--color-primary)" }} size={28} />
          </motion.div>
          <h3 className="text-2xl font-bold" style={{ color: "var(--color-primary)" }}>
            Tech Stack
          </h3>
        </div>
        <div
          className="px-3 py-1.5 rounded-full text-xs font-bold"
          style={{
            background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
            color: "white",
          }}
        >
          {totalSkills} Skills
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        <button
          onClick={() => setActiveCategory("all")}
          className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
          style={{
            backgroundColor: activeCategory === "all" ? "var(--color-primary)" : "rgba(var(--color-primary-rgb), 0.08)",
            color: activeCategory === "all" ? "var(--color-bg-primary)" : "var(--color-text-muted)",
          }}
        >
          All ({totalSkills})
        </button>
        {categories.map(([category, skills]) => {
          const IconComponent = CATEGORY_ICONS[category] || Code2;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                backgroundColor: activeCategory === category ? "var(--color-primary)" : "rgba(var(--color-primary-rgb), 0.08)",
                color: activeCategory === category ? "var(--color-bg-primary)" : "var(--color-text-muted)",
              }}
            >
              <IconComponent size={12} />
              {category.split(" ")[0]} ({skills.length})
            </button>
          );
        })}
      </div>

      {/* Categories Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid md:grid-cols-2 gap-4"
        >
          {filteredCategories.map(([category, skills], catIndex) => {
            const IconComponent = CATEGORY_ICONS[category] || Code2;
            const colorScheme = SKILL_COLORS[catIndex % SKILL_COLORS.length];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.05 }}
                className="glass-card rounded-xl p-4 relative overflow-hidden"
              >
                {/* Background glow */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${colorScheme.bg}, transparent)`,
                    opacity: 0.6,
                  }}
                />

                {/* Category Header */}
                <div className="flex items-center gap-2 mb-3 relative">
                  <div
                    className="p-1.5 rounded-lg"
                    style={{ backgroundColor: colorScheme.bg }}
                  >
                    <IconComponent size={16} style={{ color: colorScheme.text }} />
                  </div>
                  <h4 className="text-sm font-bold truncate" style={{ color: "var(--color-text-primary)" }}>
                    {category}
                  </h4>
                </div>

                {/* Skills - Compact Grid */}
                <div className="flex flex-wrap gap-1.5 relative">
                  {skills.map((skill, skillIndex) => {
                    const skillName = typeof skill === "string" ? skill : skill.name;
                    const proficiency = typeof skill === "object" && skill.proficiency ? skill.proficiency : null;
                    const techIcon = getSkillIcon(skillName);

                    return (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.02 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="group cursor-default"
                      >
                        <div
                          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all"
                          style={{
                            backgroundColor: "rgba(var(--color-primary-rgb), 0.06)",
                            border: "1px solid rgba(var(--color-primary-rgb), 0.08)",
                          }}
                        >
                          {techIcon && <span className="text-sm">{techIcon}</span>}
                          <span style={{ color: "var(--color-text-primary)" }}>
                            {skillName}
                          </span>
                          {proficiency && (
                            <span
                              className="text-[10px] font-bold ml-0.5"
                              style={{ color: colorScheme.text }}
                            >
                              {proficiency}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Summary Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
      >
        {categories.map(([category, skills], index) => {
          const IconComponent = CATEGORY_ICONS[category] || Code2;
          return (
            <div
              key={category}
              className="flex items-center gap-1.5 cursor-default"
            >
              <IconComponent size={12} style={{ color: "var(--color-text-muted)" }} />
              <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                {category.split(" ")[0]}
              </span>
              <span
                className="text-[10px] font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                {skills.length}
              </span>
            </div>
          );
        })}
      </motion.div>
    </Section>
  );
}
