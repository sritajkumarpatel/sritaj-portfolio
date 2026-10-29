import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, MessageSquare } from "lucide-react";

export default function Footer({ config }) {
  const socialLinks = [
    {
      href: `https://github.com/${config.personal.github}`,
      label: "GitHub",
      icon: <Github size={18} />,
    },
    {
      href: `https://www.linkedin.com/in/${config.personal.linkedin}`,
      label: "LinkedIn",
      icon: <Linkedin size={18} />,
    },
    {
      href: `mailto:${config.personal.email}`,
      label: "Email",
      icon: <Mail size={18} />,
    },
  ];

  return (
    <footer className="footer-border pt-12 pb-8 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Warm Human Invitation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 md:p-8 mb-10 text-center relative overflow-hidden"
        >
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ backgroundColor: "var(--color-primary)" }}
          />
          <h4 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "var(--color-text-primary)" }}>
            Let's Build Something Meaningful Together
          </h4>
          <p className="text-sm max-w-xl mx-auto mb-6 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            Whether you want to discuss Agentic AI for testing, modern QA architecture, or share book and tech recommendations—my inbox is always open.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <motion.a
              href={`mailto:${config.personal.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-bg-primary)",
              }}
            >
              <Mail size={16} />
              Say Hello
            </motion.a>
            <motion.a
              href={`https://www.linkedin.com/in/${config.personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
              style={{
                backgroundColor: "rgba(var(--color-primary-rgb), 0.1)",
                color: "var(--color-primary)",
                border: "1px solid rgba(var(--color-primary-rgb), 0.2)",
              }}
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            Built with <Heart size={14} style={{ color: "#f87171" }} className="fill-current" /> by {config.personal.name}
          </motion.p>

          <div className="flex gap-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-lg transition-colors"
                style={{
                  backgroundColor: "rgba(var(--color-primary-rgb), 0.1)",
                  color: "var(--color-primary)",
                }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}