import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, Github, BookOpen, ArrowDown } from "lucide-react";

const titles = [
  "Senior Architect at DevOn",
  "Automation Engineer",
  "Quality Engineering",
  "Scrum Master",
  "AI Engineer in making",
  "Bug Fixer & Developer",
  "Workflow Architect",
];

const floatingOrb = {
  animate: {
    y: [0, -20, 0],
    opacity: [0.5, 1, 0.5],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const floatingOrb2 = {
  animate: {
    y: [0, 15, 0],
    x: [0, -10, 0],
    opacity: [0.3, 0.7, 0.3],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Hero({ config }) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(titles[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isInitialLoad) return;

    const currentText = titles[titleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 30);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex, isInitialLoad]);

  const socialLinks = [
    {
      href: `https://www.linkedin.com/in/${config.personal.linkedin}`,
      label: "LinkedIn",
      icon: <Linkedin size={20} />,
      bg: "bg-[#0A66C2]",
      hover: "hover:bg-[#084B8A]",
    },
    {
      href: `mailto:${config.personal.email}`,
      label: "Email",
      icon: <Mail size={20} />,
      bg: "bg-slate-600",
      hover: "hover:bg-slate-500",
    },
    {
      href: `https://github.com/${config.personal.github}`,
      label: "GitHub",
      icon: <Github size={20} />,
      bg: "bg-[#24292F]",
      hover: "hover:bg-[#111214]",
    },
    {
      href: `https://medium.com/@${config.personal.medium}`,
      label: "Medium",
      icon: <BookOpen size={20} />,
      bg: "bg-[#00ab6c]",
      hover: "hover:bg-[#008c54]",
    },
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6 py-16">
      {/* Floating gradient orbs */}
      <motion.div
        {...floatingOrb}
        className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        {...floatingOrb2}
        className="absolute bottom-32 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent h-20 flex items-center justify-center"
          >
            <span className="inline-block">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-12 bg-primary ml-1 align-middle"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-text-secondary mb-4 font-medium"
          >
            {config.bio.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {config.bio.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl ${link.bg} ${link.hover} text-white font-medium transition-all shadow-lg hover:shadow-xl`}
              >
                {link.icon}
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - right side, prominent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-text-muted text-xs font-medium tracking-wider uppercase"
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="p-3 rounded-full bg-primary/20 border border-primary/30"
        >
          <ArrowDown size={24} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}