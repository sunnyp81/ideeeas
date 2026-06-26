// Aggregates every cluster file in ./clusters into one sorted array.
const modules = import.meta.glob('./clusters/*.js', { eager: true });

export const clusters = Object.values(modules)
  .map((m) => m.default)
  .filter(Boolean)
  .sort((a, b) => a.title.localeCompare(b.title));

export function getCluster(slug) {
  return clusters.find((c) => c.slug === slug);
}

export const totalIdeas = clusters.reduce((n, c) => n + c.ideas.length, 0);
