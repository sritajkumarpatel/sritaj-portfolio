import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Typewriter({ texts, speed = 80, deleteSpeed = 40, pauseTime = 2000, className = "" }) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const timeoutRef = useRef(null);

  const currentText = texts[textIndex];

  useEffect(() => {
    if (isDeleting) {
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (charIndex < currentText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, currentText, isDeleting, speed, deleteSpeed, pauseTime]);

  return (
    <motion.span
      className={className}
      key={textIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {displayText}
      <span className="relative">
        <motion.span
          className="absolute inset-0 bg-current animate-pulse"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{ width: "2px", height: "1.2em" }}
        />
      </span>
    </motion.span>
  );
}