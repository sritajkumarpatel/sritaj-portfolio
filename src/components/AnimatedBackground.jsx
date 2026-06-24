import React from "react";
import { motion } from "framer-motion";

const orbVariants = [
  {
    id: 1,
    size: "w-96 h-96",
    color: "bg-primary/20",
    position: "top-20 -left-20",
    blur: "blur-3xl",
    duration: 15,
    x: [0, 30, -20, 0],
    y: [0, -40, 20, 0],
  },
  {
    id: 2,
    size: "w-80 h-80",
    color: "bg-accent/15",
    position: "top-1/3 -right-16",
    blur: "blur-3xl",
    duration: 18,
    x: [0, -25, 15, 0],
    y: [0, 35, -25, 0],
  },
  {
    id: 3,
    size: "w-64 h-64",
    color: "bg-primary/10",
    position: "bottom-20 left-1/4",
    blur: "blur-2xl",
    duration: 20,
    x: [0, 20, -15, 0],
    y: [0, -30, 20, 0],
  },
  {
    id: 4,
    size: "w-72 h-72",
    color: "bg-accent/10",
    position: "top-2/3 right-1/3",
    blur: "blur-3xl",
    duration: 22,
    x: [0, -20, 25, 0],
    y: [0, 25, -20, 0],
  },
];

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {orbVariants.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute ${orb.size} ${orb.color} ${orb.position} ${orb.blur} rounded-full`}
          animate={{
            x: orb.x,
            y: orb.y,
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}