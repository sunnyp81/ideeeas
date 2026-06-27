// Vibrant neon accents, assigned deterministically by index so each
// collection / card keeps a consistent, memorable colour identity.
export const NEON = [
  '#22e3ff', // cyan
  '#ff2e97', // magenta
  '#b6ff3c', // lime
  '#8b5cff', // violet
  '#ff8a3c', // orange
  '#3c7bff', // blue
  '#2effc2', // mint
  '#ffd23c', // yellow
];

export const pickNeon = (i) => NEON[((i % NEON.length) + NEON.length) % NEON.length];
