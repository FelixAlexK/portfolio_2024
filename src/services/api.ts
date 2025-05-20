import axios from "axios";

import { getColor } from "./utils";

export type Repository = {
  name: string;
  description: string;
  html_url: string;
};

export type Language = {
  title: string;
  description: string;
  type: object;
  additionalProperties: {
    type: number;
  };
};

const GITHUB_API_URL = "https://api.github.com";
const token = import.meta.env.VITE_GITHUB_TOKEN as string;
const githubUsername = import.meta.env.VITE_GITHUB_USERNAME as string;

export async function getUserPublicRepos(username: string = githubUsername, accessToken: string = token) {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos?type=owner&sort=created`, {

      headers: {
        "Authorization": `token ${accessToken}`,
        "Content-Type": "application/vnd.github+json",
      },
    });

    const repositories: Repository[] = response.data.map((repo: any) => ({
      name: repo.name || "",
      description: repo.description,
      html_url: repo.html_url,
    }));

    return repositories;
  }
  catch (error) {
    console.error("Error fetching public repositories:", error);
    throw error;
  }
}

export async function getUserUsedLanguagesFromRepos(username: string = githubUsername, accessToken: string = token) {
  try {
    const repositoriesResponse = await getUserPublicRepos(username, accessToken);

    const repositories = repositoriesResponse.map((repo: Repository) => ({
      name: repo.name,
    }));

    const languagesResponse: Record<string, number>[] = [];

    for (const repo of repositories) {
      const response = await axios.get(`${GITHUB_API_URL}/repos/${username}/${repo.name}/languages`, {
        headers: {
          "Authorization": `token ${accessToken}`,
          "Content-Type": "application/vnd.github+json",
        },
      });

      if (!response.data)
        continue;

      languagesResponse.push(response.data);
    }

    // Aggregate bytes and count for each language
    const languageStats: Record<string, { bytes: number; count: number }> = {};

    for (const repoLangs of languagesResponse) {
      for (const [lang, bytes] of Object.entries(repoLangs)) {
        if (typeof bytes === "number") {
          if (!languageStats[lang]) {
            languageStats[lang] = { bytes: 0, count: 0 };
          }
          languageStats[lang].bytes += bytes;
          languageStats[lang].count += 1;
        }
      }
    }

    // Sort by bytes descending
    const sortedLanguages = Object.entries(languageStats)
      .sort((a, b) => b[1].bytes - a[1].bytes)
      .map(([lang, stats]) => ({
        lang,
        bytes: stats.bytes,
        count: stats.count,
        color: getColor(lang),
        total: repositories.length,
      }));

    console.log("sortedLanguages", sortedLanguages);

    return sortedLanguages;
  }
  catch (error) {
    console.error("Error fetching public repositories:", error);
    throw error;
  }
}
