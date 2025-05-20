// scripts/update-github-colors.ts
import fs from "node:fs";
import path from "node:path";

const LOCAL_PATH = path.resolve(__dirname, "../src/assets/github-colors.json");
const REMOTE_URL = "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json";

async function fetchRemoteJson(url: string) {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`Failed to fetch: ${response.statusText}`);
  return await response.json();
}

function readLocalJson(filePath: string) {
  if (!fs.existsSync(filePath))
    return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function deepEqual(a: any, b: any) {
  return JSON.stringify(a) === JSON.stringify(b);
}

async function updateColors() {
  const remote = await fetchRemoteJson(REMOTE_URL);
  const local = readLocalJson(LOCAL_PATH);

  if (!deepEqual(remote, local)) {
    fs.writeFileSync(LOCAL_PATH, JSON.stringify(remote, null, 2), "utf-8");
    console.log("github-colors.json updated!");
  }
  else {
    console.log("No update needed. Local file is up to date.");
  }
}

updateColors().catch(console.error);
