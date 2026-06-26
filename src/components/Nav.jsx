import React from "react";
import { Sun, Moon, Palette, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Nav({ activeSection, setActiveSection, config }) {
  const { theme, toggleMode, setPreset, presets, mounted } = useTheme();
  const navItems = [
    "home",
    "experience",
    "tech",
    "projects",
    "certifications",
    "github",
    "articles",
    "visual",
    "awards",
  ];

  const [showPresets, setShowPresets] = React.useState(false);

  if (!mounted) {
    return (
      <nav className="nav-bg fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-extrabold" style={{ color: "var(--color-primary)" }}>
            {config.personal.name}
          </h1>
        </div>
      </nav>
    );
  }

  return (
    <nav className="nav-bg fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-extrabold cursor-pointer"
          style={{ color: "var(--color-primary)" }}
          onClick={() => setActiveSection("home")}
        >
          {config.personal.name}
        </motion.h1>

        <div className="flex items-center gap-3">
          <div className="nav-right flex gap-1">
            {navItems.map((section, index) => (
              <motion.button
                key={section}
                onClick={() => setActiveSection(section)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`capitalize transition-all px-3 py-1.5 rounded-lg text-xs font-medium ${
                  activeSection === section
                    ? "border-b-2"
                    : "hover:opacity-80"
                }`}
                style={{
                  color: activeSection === section ? "var(--color-primary)" : "var(--color-text-muted)",
                  borderColor: activeSection === section ? "var(--color-primary)" : "transparent",
                  backgroundColor: activeSection === section ? "rgba(var(--color-primary-rgb), 0.1)" : "transparent",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {section === "home" && <Home size={14} className="inline mr-1" />}
                {section === "experience"
                  ? "Experience"
                  : section === "tech"
                    ? "Tech"
                    : section === "visual"
                      ? "Visual"
                      : section === "articles"
                        ? "Articles"
                        : section}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-1 ml-2">
            <AnimatePresence>
              {showPresets && (
                <motion.div
                  initial={{ opacity: 0, x: 20, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: "auto" }}
                  exit={{ opacity: 0, x: 20, height: 0 }}
                  className="glass-card rounded-xl p-3 min-w-[180px] z-50"
                  style={{ position: "absolute", right: "80px", top: "60px" }}
                >
                  <p className="text-xs mb-2 px-2" style={{ color: "var(--color-text-muted)" }}>
                    Color Presets
                  </p>
                  {Object.entries(presets).map(([key, preset]) => (
                    <button
                      key={key}
                      onClick={() => setPreset(key)}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all"
                      style={{
                        color: theme.primary === preset.primary ? "var(--color-primary)" : "var(--color-text-secondary)",
                        backgroundColor: theme.primary === preset.primary ? "rgba(var(--color-primary-rgb), 0.1)" : "transparent",
                      }}
                    >
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{
                          background: `linear-gradient(135deg, ${presets[key].primary === "frost" ? "#38bdf8" : presets[key].primary === "blue" ? "#2563eb" : presets[key].primary === "purple" ? "#8f3be7" : presets[key].primary}, ${presets[key].accent === "cyan" ? "#06b6d4" : presets[key].accent === "pink" ? "#ec4899" : presets[key].accent})`,
                        }}
                      />
                      {key.replace("-", " / ")}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={() => setShowPresets(!showPresets)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-1.5 rounded-lg transition-colors"
              style={{
                backgroundColor: "rgba(var(--color-primary-rgb), 0.1)",
                color: "var(--color-primary)",
              }}
              aria-label="Color presets"
            >
              <Palette size={16} />
            </motion.button>

            <motion.button
              onClick={toggleMode}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className="p-1.5 rounded-lg transition-colors"
              style={{
                backgroundColor: "rgba(var(--color-primary-rgb), 0.1)",
                color: "var(--color-primary)",
              }}
              aria-label={theme.mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme.mode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}