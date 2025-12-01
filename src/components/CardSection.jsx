import React from "react";
import { BookOpen } from "lucide-react";

export default function CardSection({ title, content, isFeatured }) {
  if (title === "keyFeatures") {
    if (!content) return null;
    return (
      <div className="mb-6">
        <p className="text-sm text-gray-400 mb-3 font-semibold">
          Key Features:
        </p>
        <div className="flex flex-wrap gap-2">
          {content.map((feature) => (
            <span
              key={feature}
              className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (title === "technologies") {
    if (!content) return null;
    return (
      <div className="mb-6">
        <p className="text-sm text-gray-400 mb-3 font-semibold">
          Technologies:
        </p>
        <div className="flex flex-wrap gap-2">
          {content.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 rounded text-xs border ${
                isFeatured
                  ? "bg-slate-700/50 text-slate-300 border-slate-600"
                  : "bg-purple-600/20 text-purple-300 border-purple-500/30"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (title === "quickStart") {
    if (!content) return null;
    return (
      <div className="bg-slate-900/50 rounded-lg p-4 mb-6 border border-slate-700">
        <p className="text-sm text-gray-400 mb-3 flex items-center gap-2">
          <BookOpen size={16} className="text-purple-400" />
          <strong>{content.title}</strong>
        </p>
        <ol className="text-sm text-gray-400 space-y-2 ml-4 list-decimal">
          {content.steps?.map((step, index) => (
            <li key={index}>
              {step.text}
              {step.code && (
                <>
                  {" "}
                  <code className="bg-slate-800 px-2 py-1 rounded text-purple-300">
                    {step.code}
                  </code>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return null;
}
