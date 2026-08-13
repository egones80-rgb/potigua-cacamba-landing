import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface DebrisItem {
  id: number;
  type: "brick" | "concrete" | "wood" | "stone" | "mortar";
  startX: number;
  rotation: number;
  scale: number;
  duration: number;
  delay: number;
}

const DEBRIS_SVGS = {
  brick: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6H20V18H4V6Z" fill="#B45309" />
      <path d="M4 10H20" stroke="#92400E" strokeWidth="0.5" />
      <path d="M12 6V10" stroke="#92400E" strokeWidth="0.5" />
      <path d="M8 10V18" stroke="#92400E" strokeWidth="0.5" />
      <path d="M16 10V18" stroke="#92400E" strokeWidth="0.5" />
    </svg>
  ),
  concrete: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4L18 8V16L12 20L6 16V8L12 4Z" fill="#64748B" />
      <circle cx="10" cy="10" r="1" fill="#475569" />
      <circle cx="15" cy="14" r="0.5" fill="#475569" />
      <circle cx="12" cy="16" r="1.5" fill="#475569" />
    </svg>
  ),
  wood: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="16" height="4" rx="1" fill="#78350F" />
      <path d="M6 12H18" stroke="#451A03" strokeWidth="0.5" strokeDasharray="2 1" />
    </svg>
  ),
  stone: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 6C12 4 16 5 18 8C20 11 19 15 16 18C13 21 8 20 6 17C4 14 5 10 10 6Z" fill="#94A3B8" />
    </svg>
  ),
  mortar: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8C10 6 14 6 16 8C18 10 18 14 16 16C14 18 10 18 8 16C6 14 6 10 8 8Z" fill="#CBD5E1" />
      <path d="M10 10L14 14" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
};

export function HeroAnimation() {
  const [debris, setDebris] = useState<DebrisItem[]>([]);
  const [counter, setCounter] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const spawnBatch = () => {
      const isMobile = window.innerWidth < 768;
      const batchSize = isMobile ? Math.floor(Math.random() * 2) + 2 : Math.floor(Math.random() * 4) + 3;
      
      const types: DebrisItem['type'][] = ["brick", "concrete", "wood", "stone", "mortar"];
      const newItems: DebrisItem[] = Array.from({ length: batchSize }).map((_, i) => ({
        id: counter + i,
        type: types[Math.floor(Math.random() * types.length)],
        startX: 15 + Math.random() * 70,
        rotation: Math.random() * 360,
        scale: 0.6 + Math.random() * 0.8,
        duration: 1.5 + Math.random() * 1.5,
        delay: Math.random() * 1.5,
      }));

      setDebris((prev) => [...prev, ...newItems]);
      setCounter((prev) => prev + batchSize);
    };

    const interval = setInterval(() => {
      spawnBatch();
      // Clean up old items from state periodically
      setDebris(prev => prev.filter(item => item.id > counter - 20));
    }, 2500);

    spawnBatch();

    return () => clearInterval(interval);
  }, [counter, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      <AnimatePresence>
        {debris.map((item) => (
          <motion.div
            key={item.id}
            initial={{ 
              y: -50, 
              x: `${item.startX}%`, 
              rotate: item.rotation,
              opacity: 0,
              scale: item.scale
            }}
            animate={{ 
              y: "85%",
              x: [`${item.startX}%`, `${item.startX + (Math.random() * 6 - 3)}%`, `${item.startX + (Math.random() * 6 - 3)}%`],
              rotate: item.rotation + 360 * (Math.random() > 0.5 ? 1 : -1),
              opacity: [0, 1, 1, 0],
              scale: item.scale,
            }}
            transition={{ 
              duration: item.duration, 
              delay: item.delay,
              ease: "linear",
            }}
            className="absolute w-6 h-6 sm:w-8 sm:h-8"
          >
            {DEBRIS_SVGS[item.type]}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
