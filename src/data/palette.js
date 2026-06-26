// Vivid flat block colours, assigned deterministically by index.
export const PALETTE = [
  '#ffe14d', // yellow
  '#ff8fb1', // pink
  '#bdf24e', // lime
  '#7cc4ff', // sky
  '#ffae6b', // orange
  '#c9a7ff', // lilac
  '#6ee7c7', // mint
  '#ff7a6b', // coral
];

export const pickColor = (i) => PALETTE[((i % PALETTE.length) + PALETTE.length) % PALETTE.length];
