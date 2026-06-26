import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Section from "./Section";
import { SkeletonGrid } from "./Skeleton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export default function MediumArticles({ articles }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section>
      <div className="flex items-center gap-3 mb-6">
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
          <BookOpen style={{ color: "var(--color-accent)" }} size={28} />
        </motion.div>
        <h3 className="text-2xl font-bold" style={{ color: "var(--color-accent)" }}>
          Medium Articles
        </h3>
      </div>

      {loading ? (
        <SkeletonGrid count={4} columns={2} />
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4"
        >
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.01 }}
              className="glass-card rounded-xl p-5 block"
            >
              <h4 className="font-semibold mb-2 line-clamp-2" style={{ color: "var(--color-accent)" }}>
                {article.title}
              </h4>
              <p className="text-sm mb-3 line-clamp-3" style={{ color: "var(--color-text-secondary)" }}>
                {article.description || article.subtitle || "Read more on Medium"}
              </p>
              <div className="flex items-center gap-3 text-xs" style={{ color: "var(--color-text-muted)" }}>
                {article.pubDate && <span>{new Date(article.pubDate).toLocaleDateString()}</span>}
                {article.readTime && <span>• {article.readTime} min read</span>}
              </div>
            </motion.a>
          ))}
        </motion.div>
      )}
    </Section>
  );
}