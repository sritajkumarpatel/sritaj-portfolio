import React, { useState, useEffect, useRef } from "react";
import { Sun, Moon, Palette, Menu, X, ChevronUp, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Nav({ activeSection, scrollToSection, config, scrollProgress }) {
  const { theme, toggleMode, setPreset, presets, themeColors, mounted } = useTheme();
  const [showPresets, setShowPresets] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const presetsRef = useRef(null);
  const moreRef = useRef(null);

  const enabledSections = (config.sections || []).filter((s) => s.enabled !== false);
  const primaryItems = enabledSections.filter((s) => s.navPrimary !== false);
  const moreItems = enabledSections.filter((s) => s.navPrimary === false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on outside click or escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (presetsRef.current && !presetsRef.current.contains(e.target)) {
        setShowPresets(false);
      }
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setShowMore(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowPresets(false);
        setShowMore(false);
        setMobileOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goTo = (id) => {
    scrollToSection(id);
    setMobileOpen(false);
    setShowMore(false);
    setShowPresets(false);
  };

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
    <>
      <nav className="nav-bg fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center gap-3">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg font-extrabold cursor-pointer whitespace-nowrap"
            style={{ color: "var(--color-primary)" }}
            onClick={() => goTo("hero")}
          >
            {config.personal.name}
          </motion.h1>

          <div className="flex items-center gap-1">
            <div className="hidden lg:flex items-center gap-1">
              {primaryItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  className="relative px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors"
                  style={{
                    color: activeSection === item.id ? "var(--color-primary)" : "var(--color-text-muted)",
                    backgroundColor: activeSection === item.id ? "rgba(var(--color-primary-rgb), 0.1)" : "transparent",
                  }}
                >
                  {item.navLabel || item.label}
                </button>
              ))}
              {moreItems.length > 0 && (
                <div className="relative" ref={moreRef}>
                  <button
                    onClick={() => {
                      setShowMore((v) => !v);
                      setShowPresets(false);
                    }}
                    className="px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors"
                    style={{
                      color: showMore ? "var(--color-primary)" : "var(--color-text-muted)",
                      backgroundColor: showMore ? "rgba(var(--color-primary-rgb), 0.1)" : "transparent",
                    }}
                  >
                    More
                  </button>
                  <AnimatePresence>
                    {showMore && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="glass-card rounded-xl p-2 min-w-[140px] absolute right-0 top-10 z-50 shadow-xl"
                      >
                        {moreItems.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => goTo(item.id)}
                            className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors"
                            style={{
                              color: activeSection === item.id ? "var(--color-primary)" : "var(--color-text-secondary)",
                              backgroundColor: activeSection === item.id ? "rgba(var(--color-primary-rgb), 0.08)" : "transparent",
                            }}
                          >
                            {item.navLabel || item.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            <div className="flex items-center gap-1 ml-1">
              {/* Theme Presets Dropdown */}
              <div className="relative" ref={presetsRef}>
                <button
                  onClick={() => {
                    setShowPresets((v) => !v);
                    setShowMore(false);
                  }}
                  className="p-1.5 rounded-lg transition-colors"
                  style={{
                    backgroundColor: showPresets ? "rgba(var(--color-primary-rgb), 0.2)" : "rgba(var(--color-primary-rgb), 0.1)",
                    color: "var(--color-primary)",
                  }}
                  aria-label="Color presets"
                >
                  <Palette size={16} />
                </button>

                <AnimatePresence>
                  {showPresets && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="glass-card rounded-xl p-3 min-w-[200px] absolute right-0 top-10 z-50 shadow-xl"
                    >
                      <p className="text-xs font-semibold mb-2 px-2 uppercase tracking-wider" style={{ color: "var(--color-text-muted)" }}>
                        Color Presets
                      </p>
                      <div className="space-y-1">
                        {Object.entries(presets || {}).map(([key, preset]) => {
                          const pColor = themeColors?.[preset.primary]?.primary || preset.primary;
                          const aColor = themeColors?.[preset.accent]?.primary || preset.accent;
                          const isSelected = theme.primary === preset.primary && theme.accent === preset.accent;

                          return (
                            <button
                              key={key}
                              onClick={() => {
                                setPreset(key);
                                setShowPresets(false);
                              }}
                              className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                              style={{
                                color: isSelected ? "var(--color-primary)" : "var(--color-text-secondary)",
                                backgroundColor: isSelected ? "rgba(var(--color-primary-rgb), 0.12)" : "transparent",
                              }}
                            >
                              <div className="flex items-center gap-2.5">
                                <span
                                  className="w-3.5 h-3.5 rounded-full flex-shrink-0 shadow-sm border border-white/20"
                                  style={{
                                    background: `linear-gradient(135deg, ${pColor}, ${aColor})`,
                                  }}
                                />
                                <span className="capitalize">{key.replace("-", " / ")}</span>
                              </div>
                              {isSelected && <Check size={14} style={{ color: "var(--color-primary)" }} />}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={toggleMode}
                className="p-1.5 rounded-lg transition-colors"
                style={{
                  backgroundColor: "rgba(var(--color-primary-rgb), 0.1)",
                  color: "var(--color-primary)",
                }}
                aria-label={theme.mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme.mode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <button
                className="lg:hidden p-1.5 rounded-lg transition-colors"
                style={{ color: "var(--color-primary)" }}
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden px-4 pb-3"
            >
              {enabledSections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-lg text-sm"
                  style={{
                    color: activeSection === item.id ? "var(--color-primary)" : "var(--color-text-secondary)",
                    backgroundColor: activeSection === item.id ? "rgba(var(--color-primary-rgb), 0.08)" : "transparent",
                  }}
                >
                  {item.navLabel || item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className="h-0.5"
          style={{
            background: `linear-gradient(to right, var(--color-primary), var(--color-accent))`,
            width: `${scrollProgress}%`,
          }}
        />
      </nav>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => goTo("hero")}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-bg-primary)",
            }}
            aria-label="Back to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
