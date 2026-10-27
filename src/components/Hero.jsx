import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, Github, BookOpen } from "lucide-react";

function AnimatedCounter({ end, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setCount(end);
      return;
    }
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Hero({ config }) {
  const titles = config?.titles?.length ? config.titles : [config?.personal?.name || ""];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    if (titles.length <= 1) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [titles.length]);

  const stats = config?.highlights?.stats || [];
  const tools = config?.highlights?.tools || [];
  const headline = config.bio.headline || "";
  const headlineParts = headline.split(" ");
  const headlineLead = headlineParts.slice(0, 2).join(" ");
  const headlineRest = headlineParts.slice(2).join(" ");

  const socialLinks = [
    {
      href: `https://www.linkedin.com/in/${config.personal.linkedin}`,
      label: "LinkedIn",
      icon: <Linkedin size={18} />,
      bg: "bg-[#0A66C2]",
      hover: "hover:bg-[#084B8A]",
    },
    {
      href: `mailto:${config.personal.email}`,
      label: "Contact Me",
      icon: <Mail size={18} />,
      bg: "bg-slate-600",
      hover: "hover:bg-slate-500",
    },
    {
      href: `https://github.com/${config.personal.github}`,
      label: "GitHub",
      icon: <Github size={18} />,
      bg: "bg-[#24292F]",
      hover: "hover:bg-[#111214]",
    },
    {
      href: `https://medium.com/@${config.personal.medium}`,
      label: "Medium",
      icon: <BookOpen size={18} />,
      bg: "bg-[#00ab6c]",
      hover: "hover:bg-[#008c54]",
    },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="flex flex-col items-center gap-7">
          <motion.img
            src={`${import.meta.env.BASE_URL}images/profile.png`}
            alt={config.personal.name}
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover"
            style={{ boxShadow: "0 0 32px rgba(var(--color-primary-rgb), 0.22)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <div className="h-7 flex items-center justify-center mb-3 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={titleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-xs md:text-sm font-semibold tracking-wider uppercase"
                  style={{ color: "var(--color-accent)" }}
                >
                  {titles[titleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              {config.personal.name}
            </h1>
            <p
              className="text-lg md:text-xl font-semibold mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              <span className="italic" style={{ color: "var(--color-primary)" }}>
                {headlineLead}
              </span>{" "}
              {headlineRest}
            </p>
            <p
              className="max-w-2xl mx-auto mb-2 leading-relaxed text-sm md:text-base"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {config.bio.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="flex justify-center gap-3 flex-wrap"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl ${link.bg} ${link.hover} text-white font-medium transition-colors shadow-lg text-sm`}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </motion.div>

          {stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.45 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-2 w-full max-w-3xl"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                  <p className="text-2xl md:text-3xl font-extrabold" style={{ color: "var(--color-primary)" }}>
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs font-semibold mt-1" style={{ color: "var(--color-text-primary)" }}>
                    {stat.label}
                  </p>
                  <p className="text-[10px] mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                    {stat.sublabel}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

          {tools.length > 0 && (
            <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              {tools.join(" · ")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
