import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { Layers } from "lucide-react";
import visualConcepts from "../data/visualConcepts.json";

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

export default function VisualConcepts() {
  const [items] = useState(() =>
    visualConcepts.map((v) => ({ ...v, previewStatus: "idle" }))
  );
  const [previewState, setPreviewState] = useState(() =>
    new Array(items.length).fill("idle")
  );
  const timeouts = useRef({});

  useEffect(() => {
    items.forEach((it, idx) => {
      if (previewState[idx] !== "idle") return;
      const t = setTimeout(() => {
        setPreviewState((prev) => {
          const copy = [...prev];
          if (copy[idx] === "idle") copy[idx] = "failed";
          return copy;
        });
      }, 3000);
      timeouts.current[idx] = t;
    });
    return () => {
      Object.values(timeouts.current).forEach(clearTimeout);
    };
  }, []);

  const markLoaded = (idx) => {
    clearTimeout(timeouts.current[idx]);
    setPreviewState((prev) => {
      const copy = [...prev];
      copy[idx] = "loaded";
      return copy;
    });
  };

  const markFailed = (idx) => {
    clearTimeout(timeouts.current[idx]);
    setPreviewState((prev) => {
      const copy = [...prev];
      copy[idx] = "failed";
      return copy;
    });
  };

  const emojiPool = useMemo(
    () => ["🤩", "😎", "🫠", "🧠", "🫧", "🫶", "🫡", "🧿", "🤖", "🛠️", "🧪", "🫢", "💫", "❤️", "😂"],
    []
  );

  const emojisForIndex = (idx) => {
    const start = idx % emojiPool.length;
    const list = [];
    for (let k = 0; k < 5; k++) {
      list.push(emojiPool[(start + k) % emojiPool.length]);
    }
    return list;
  };

  return (
    <Section>
      <div className="flex items-center gap-3 mb-3">
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
          <Layers style={{ color: "var(--color-primary)" }} size={32} />
        </motion.div>
        <h3 className="text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
          Complex ideas, simplified.
        </h3>
      </div>
      <p className="mb-6" style={{ color: "var(--color-text-secondary)" }}>
        A collection of deep dives and quick references.
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-4"
      >
        {items.map((it, i) => (
          <motion.div
            key={`${i}-${it.url}`}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-card rounded-xl p-6"
          >
            <a
              href={it.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-lg hover:underline"
              style={{ color: "var(--color-primary)" }}
            >
              {it.title || `Artifact ${i + 1}`}
            </a>
            {it.description && (
              <p className="text-sm mb-3" style={{ color: "var(--color-text-muted)" }}>
                {it.description}
              </p>
            )}
            <div className="mb-4">
              {previewState[i] === "loaded" && (
                <div className="visual-preview">
                  <iframe
                    src={it.url}
                    title={it.title || `Preview ${i + 1}`}
                    loading="lazy"
                    className="w-full h-56 rounded-md"
                    style={{ border: "1px solid var(--color-border)" }}
                    onLoad={() => markLoaded(i)}
                    onError={() => markFailed(i)}
                  />
                </div>
              )}
              {previewState[i] === "idle" && (
                <div className="visual-preview-loading" style={{ color: "var(--color-text-muted)" }}>
                  Attempting to load preview…
                </div>
              )}
              {previewState[i] === "failed" && (
                <div className="visual-preview-failed" style={{ color: "var(--color-text-muted)" }}>
                  <div className="emoji-row text-3xl mb-2" aria-hidden>
                    {emojisForIndex(i).map((em, idx) => (
                      <span key={idx} className="emoji mr-2">
                        {em}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <motion.a
                href={it.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full text-sm"
                style={{
                  backgroundColor: "rgba(var(--color-primary-rgb), 0.15)",
                  color: "var(--color-primary)",
                  border: "1px solid rgba(var(--color-primary-rgb), 0.2)",
                }}
              >
                Open
              </motion.a>
              {previewState[i] === "failed" && (
                <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                  Preview not available
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}