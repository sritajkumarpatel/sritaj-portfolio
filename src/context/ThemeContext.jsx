import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import config from "../config.json";

const ThemeContext = createContext(null);

const themeColors = {
  purple: { primary: "#8f3be7", light: "#a855f7", dark: "#7c3aed" },
  pink: { primary: "#db2777", light: "#ec4899", dark: "#be185d" },
  blue: { primary: "#2563eb", light: "#3b82f6", dark: "#1d4ed8" },
  cyan: { primary: "#0891b2", light: "#06b6d4", dark: "#0e7490" },
  emerald: { primary: "#059669", light: "#10b981", dark: "#047857" },
  teal: { primary: "#0d9488", light: "#14b8a6", dark: "#0f766e" },
  orange: { primary: "#ea580c", light: "#f97316", dark: "#c2410c" },
  amber: { primary: "#d97706", light: "#f59e0b", dark: "#b45309" },
  rose: { primary: "#e11d48", light: "#f43f5e", dark: "#be123c" },
  violet: { primary: "#7c3aed", light: "#8b5cf6", dark: "#6d28d9" },
  indigo: { primary: "#4f46e5", light: "#6366f1", dark: "#4338ca" },
  frost: { primary: "#38bdf8", light: "#7dd3fc", dark: "#0ea5e9" },
};

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : "0, 0, 0";
}

function getCSSVariables(primary, accent, mode) {
  const p = themeColors[primary] || themeColors.frost;
  const a = themeColors[accent] || themeColors.cyan;
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
    "--color-bg-primary": isDark ? "#0a0f1a" : "#f8fafc",
    "--color-bg-secondary": isDark ? "#0f172a" : "#ffffff",
    "--color-bg-tertiary": isDark ? "#1e293b" : "#f1f5f9",
    "--color-text-primary": isDark ? "#f1f5f9" : "#0f172a",
    "--color-text-secondary": isDark ? "#cbd5e1" : "#334155",
    "--color-text-muted": isDark ? "#94a3b8" : "#64748b",
    "--color-border": isDark
      ? "rgba(56, 189, 248, 0.15)"
      : "rgba(14, 165, 233, 0.15)",
    "--color-border-strong": isDark
      ? "rgba(56, 189, 248, 0.3)"
      : "rgba(14, 165, 233, 0.3)",
    "--color-glass-bg": isDark
      ? "linear-gradient(180deg, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.5))"
      : "linear-gradient(180deg, rgba(255, 255, 255, 0.85), rgba(241, 245, 249, 0.7))",
    "--color-glass-border": isDark
      ? "rgba(56, 189, 248, 0.12)"
      : "rgba(14, 165, 233, 0.12)",
    "--color-glass-shadow": isDark
      ? "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.03)"
      : "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
    "--color-glass-hover-border": isDark
      ? "rgba(56, 189, 248, 0.3)"
      : "rgba(14, 165, 233, 0.3)",
    "--color-glass-hover-shadow": isDark
      ? "0 16px 48px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 189, 248, 0.1)"
      : "0 16px 48px rgba(0, 0, 0, 0.12), 0 0 20px rgba(14, 165, 233, 0.08)",
    "--color-nav-bg": isDark
      ? "linear-gradient(180deg, rgba(10, 15, 26, 0.95), rgba(10, 15, 26, 0.85))"
      : "linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9))",
    "--color-nav-shadow": isDark
      ? "0 4px 20px rgba(0, 0, 0, 0.4)"
      : "0 4px 20px rgba(0, 0, 0, 0.08)",
    "--color-footer-border": isDark
      ? "rgba(56, 189, 248, 0.1)"
      : "rgba(14, 165, 233, 0.1)",
    "--color-scrollbar-track": isDark ? "#0f172a" : "#f1f5f9",
    "--color-scrollbar-thumb": isDark ? "#1e40af" : "#38bdf8",
    "--color-scrollbar-thumb-hover": isDark ? "#2563eb" : "#0ea5e9",
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