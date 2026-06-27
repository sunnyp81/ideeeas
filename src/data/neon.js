// Refined single-accent scheme. One confident teal-cyan does the work,
// with two close cousins for subtle tonal variation (no rainbow).
export const NEON = [
  '#3ad6c0', // teal (primary)
  '#46c6e0', // cyan
  '#6aa6f0', // soft blue
];

export const pickNeon = (i) => NEON[((i % NEON.length) + NEON.length) % NEON.length];
