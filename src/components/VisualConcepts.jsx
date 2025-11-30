import React, { useEffect, useState, useRef, useMemo } from "react";
import Section from "./Section";
import { Layers } from "lucide-react";
import visualConcepts from "../data/visualConcepts.json";

export default function VisualConcepts() {
  // items is the data provided in JSON; we pre-populate preview status
  const [items] = useState(() =>
    visualConcepts.map((v) => ({ ...v, previewStatus: "idle" }))
  );
  const [previewState, setPreviewState] = useState(() =>
    new Array(items.length).fill("idle")
  );
  const timeouts = useRef({});

  useEffect(() => {
    // For each item, attempt to set a timeout that marks preview as failed if not loaded
    items.forEach((it, idx) => {
      if (previewState[idx] !== "idle") return;
      // start a timeout for fail detection (e.g. 3s)
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
      // cleanup
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

  // Emoji pool for fallback states (15 emojis) — choose 5 per card based on index (rotating slice)
  const emojiPool = useMemo(
    () => [
      "🤩",
      "😎",
      "🫠",
      "🧠",
      "🫧",
      "🫶",
      "🫡",
      "🧿",
      "🤖",
      "🛠️",
      "🧪",
      "🫢",
      "💫",
      "❤️",
      "😂",
    ],
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
    <Section className="bg-slate-900/50">
      <div className="flex items-center gap-3 mb-3">
        <Layers className="text-purple-400" size={32} />
        <h3 className="text-3xl font-bold">Complex ideas, simplified.</h3>
      </div>
      <p className="text-gray-300 mb-6">
        A collection of deep dives and quick references.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((it, i) => (
          <div
            key={`${i}-${it.url}`}
            className="glass-card rounded-xl p-6 border border-purple-500/20"
          >
            <a
              href={it.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 font-semibold text-lg hover:underline"
            >
              {it.title || `Artifact ${i + 1}`}
            </a>
            {it.description && (
              <p className="text-gray-400 text-sm mb-3">{it.description}</p>
            )}
            <div className="mb-4">
              {previewState[i] === "loaded" && (
                <div className="visual-preview">
                  <iframe
                    src={it.url}
                    title={it.title || `Preview ${i + 1}`}
                    loading="lazy"
                    className="w-full h-56 rounded-md border"
                    onLoad={() => markLoaded(i)}
                    onError={() => markFailed(i)}
                  />
                </div>
              )}
              {previewState[i] === "idle" && (
                <div className="visual-preview-loading text-gray-400">
                  Attempting to load preview…
                </div>
              )}
              {previewState[i] === "failed" && (
                <div className="visual-preview-failed text-gray-400">
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
              <a
                href={it.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-purple-600/20 text-purple-300 text-sm"
              >
                Open
              </a>
              {previewState[i] === "failed" && (
                <span className="text-xs text-gray-400">
                  Preview not available
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
