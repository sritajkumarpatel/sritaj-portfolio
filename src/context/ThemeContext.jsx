import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import config from "../config.json";

const ThemeContext = createContext(null);

const themeColors = {
  slate: { primary: "#e2e8f0", light: "#f1f5f9", dark: "#cbd5e1" },
  amber: { primary: "#fbbf24", light: "#fcd34d", dark: "#f59e0b" },
  indigo: { primary: "#818cf8", light: "#a5b4fc", dark: "#6366f1" },
  violet: { primary: "#c084fc", light: "#d8b4fe", dark: "#a855f7" },
  emerald: { primary: "#34d399", light: "#6ee7b7", dark: "#10b981" },
  teal: { primary: "#2dd4bf", light: "#5eead4", dark: "#14b8a6" },
  rose: { primary: "#fb7185", light: "#fda4af", dark: "#f43f5e" },
  fuchsia: { primary: "#e879f9", light: "#f0abfc", dark: "#d946ef" },
  blue: { primary: "#60a5fa", light: "#93c5fd", dark: "#3b82f6" },
  cyan: { primary: "#22d3ee", light: "#67e8f9", dark: "#06b6d4" },
};

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : "0, 0, 0";
}

function getCSSVariables(primary, accent, mode) {
  const p = themeColors[primary] || themeColors.slate;
  const a = themeColors[accent] || themeColors.amber;
  const isDark = mode === "dark";

  return {
    "--color-primary": p.primary,
    "--color-primary-light": p.light,
    "--color-primary-dark": p.dark,
    "--color-primary-rgb": hexToRgb(p.primary),
    "--color-accent": a.primary,
    "--color-accent-light": a.light,
    "--color-accent-dark": a.dark,
    "--color-accent-rgb": hexToRgb(a.primary),
    "--color-bg-primary": isDark ? "#0f1218" : "#f5f0e8",
    "--color-bg-secondary": isDark ? "#1c2028" : "#faf7f2",
    "--color-bg-tertiary": isDark ? "#282d38" : "#ebe5db",
    "--color-text-primary": isDark ? "#f1f5f9" : "#2c2416",
    "--color-text-secondary": isDark ? "#cbd5e1" : "#5c5347",
    "--color-text-muted": isDark ? "#94a3b8" : "#8a7e72",
    "--color-border": isDark
      ? "rgba(251, 191, 36, 0.12)"
      : "rgba(139, 119, 80, 0.15)",
    "--color-border-strong": isDark
      ? "rgba(251, 191, 36, 0.25)"
      : "rgba(139, 119, 80, 0.3)",
    "--color-glass-bg": isDark
      ? "linear-gradient(180deg, rgba(28, 32, 40, 0.8), rgba(15, 18, 24, 0.7))"
      : "linear-gradient(180deg, rgba(250, 247, 242, 0.95), rgba(245, 240, 232, 0.85))",
    "--color-glass-border": isDark
      ? "rgba(251, 191, 36, 0.1)"
      : "rgba(139, 119, 80, 0.12)",
    "--color-glass-shadow": isDark
      ? "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.03)"
      : "0 8px 32px rgba(139, 119, 80, 0.08), inset 0 1px 0 rgba(255,255,255,0.7)",
    "--color-glass-hover-border": isDark
      ? "rgba(251, 191, 36, 0.25)"
      : "rgba(139, 119, 80, 0.25)",
    "--color-glass-hover-shadow": isDark
      ? "0 16px 48px rgba(0, 0, 0, 0.5), 0 0 30px rgba(251, 191, 36, 0.08)"
      : "0 16px 48px rgba(139, 119, 80, 0.12), 0 0 30px rgba(139, 119, 80, 0.06)",
    "--color-nav-bg": isDark
      ? "linear-gradient(180deg, rgba(15, 18, 24, 0.95), rgba(15, 18, 24, 0.85))"
      : "linear-gradient(180deg, rgba(245, 240, 232, 0.98), rgba(250, 247, 242, 0.92))",
    "--color-nav-shadow": isDark
      ? "0 4px 20px rgba(0, 0, 0, 0.5)"
      : "0 4px 20px rgba(139, 119, 80, 0.08)",
    "--color-footer-border": isDark
      ? "rgba(251, 191, 36, 0.08)"
      : "rgba(139, 119, 80, 0.1)",
    "--color-scrollbar-track": isDark ? "#0f1218" : "#ebe5db",
    "--color-scrollbar-thumb": isDark ? "#282d38" : "#c4b8a8",
    "--color-scrollbar-thumb-hover": isDark ? "#3b414d" : "#a89888",
    "--color-skeleton": isDark ? "#1c2028" : "#e8e0d4",
    "--color-skeleton-shine": isDark ? "#282d38" : "#f5f0e8",
    "--color-overlay": isDark ? "rgba(0, 0, 0, 0.7)" : "rgba(44, 36, 22, 0.4)",
  };
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...config.theme, ...parsed };
      }
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return { ...config.theme, mode: prefersDark ? "dark" : "light" };
    }
    return { ...config.theme, mode: "dark" };
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    const vars = getCSSVariables(theme.primary, theme.accent, theme.mode);
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    document.documentElement.classList.toggle("dark", theme.mode === "dark");
    localStorage.setItem("portfolio-theme", JSON.stringify(theme));
  }, [theme, mounted]);

  const toggleMode = () => {
    setTheme((prev) => ({ ...prev, mode: prev.mode === "dark" ? "light" : "dark" }));
  };

  const setPreset = (presetName) => {
    const preset = config.theme.presets[presetName];
    if (preset) {
      setTheme((prev) => ({ ...prev, ...preset }));
    }
  };

  const setPrimary = (primary) => setTheme((prev) => ({ ...prev, primary }));
  const setAccent = (accent) => setTheme((prev) => ({ ...prev, accent }));

  const value = useMemo(
    () => ({
      theme,
      toggleMode,
      setPreset,
      setPrimary,
      setAccent,
      presets: config.theme.presets,
      mounted,
    }),
    [theme, mounted]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}