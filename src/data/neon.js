// Single locked accent (refined indigo). One disciplined colour does the work,
// default state is monochrome, so pickNeon() returns the accent at every index.
// Bright cousin is for hover / link moments only.
export const NEON = [
  '#6E79F2', // accent (primary)
  '#6E79F2', // accent
  '#6E79F2', // accent
];

export const pickNeon = (i) => NEON[((i % NEON.length) + NEON.length) % NEON.length];
