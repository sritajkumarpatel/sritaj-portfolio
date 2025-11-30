import React from "react";

export default function Section({ className = "", children }) {
  return (
    <section className={`py-12 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
