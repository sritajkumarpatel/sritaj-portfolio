import React from "react";
import Section from "./Section";
import { BookOpen, ExternalLink } from "lucide-react";

export default function MediumArticles({ articles }) {
  return (
    <Section className="bg-slate-900/50">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="text-purple-400" size={32} />
        <h3 className="text-3xl font-bold">Medium Articles</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="glass-card bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105"
          >
            <p className="text-sm text-gray-400 mb-2">{article.date}</p>
            <h4 className="text-lg font-semibold mb-3 text-purple-300 line-clamp-2">
              {article.title}
            </h4>
            <p className="text-gray-400 mb-4 text-sm line-clamp-3">
              {article.description}
            </p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
            >
              Read More <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
