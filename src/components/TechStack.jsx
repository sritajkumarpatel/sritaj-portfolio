import React from "react";
import Section from "./Section";
import { Code } from "lucide-react";

// Icons removed by request: we no longer show brand icons in the UI (simpler text-only display)

const hexToRGBA = (hex, alpha = 0.12) => {
  const h = hex.replace("#", "");
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const getContrastColor = (hex) => {
  // Calculate luminance and choose black or white for contrast
  const h = hex.replace("#", "");
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  // relative luminance
  const luminance =
    0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255);
  return luminance > 0.6 ? "#000000" : "#ffffff";
};

// getBrandLogo is no longer used; prefer `getBrand` that supports skill meta objects

const normalizeSlug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/(^-|-$)/g, "");

const getSkillMeta = (skill) => {
  if (!skill) return { name: "" };
  if (typeof skill === "string") return { name: skill };
  return {
    name: skill.name,
    slug: skill.slug,
    color: skill.color,
  };
};

// brand lookup removed — we show text-only bubbles, color optional per skill JSON.

// NOTE: `normalizeSlug` is declared above; reused for fallback

export default function TechStack({ techStacks }) {
  return (
    <Section className="bg-slate-900/50">
      <div className="flex items-center gap-3 mb-6">
        <Code className="text-purple-400" size={32} />
        <h3 className="text-3xl font-bold">Tech Stack</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(techStacks).map(([category, skills]) => (
          <div
            key={category}
            className="glass-card bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all"
          >
            <h4 className="text-lg font-semibold mb-4 text-purple-400">
              {category}
            </h4>
            <div className="flex flex-wrap gap-2 items-center">
              {skills.map((skill) => {
                const s = getSkillMeta(skill);
                const color = s.color;
                return (
                  <div
                    key={`${category}-${s.name}`}
                    className={`inline-flex items-center gap-3 px-4 py-1 h-8 rounded-full text-xs transition-all duration-150 ${
                      color
                        ? ""
                        : "bg-purple-600/20 text-purple-300 border border-purple-500/20"
                    }`}
                    aria-label={`tech-${s.name}`}
                    title={s.name}
                    style={{
                      backgroundColor: color
                        ? hexToRGBA(color, 0.12)
                        : undefined,
                      border: color
                        ? `1px solid ${hexToRGBA(color, 0.18)}`
                        : undefined,
                      color: color ? getContrastColor(color) : undefined,
                    }}
                  >
                    <span className="text-xs leading-4">{s.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
