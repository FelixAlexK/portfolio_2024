import colorsData from "../assets/github-colors.json";

type GithubColors = Record<string, { color: string | null; url: string }>;
const colors = colorsData as GithubColors;

export function getColor(name: string) {
  const color = colors[name]?.color;
  if (!color) {
    console.warn(`Color not found for ${name}`);
    return null;
  }
  return color;
}
