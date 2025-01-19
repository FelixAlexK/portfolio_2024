import axios from "axios";

export interface Repository {
  name: string;
  description: string;
  html_url: string;
}

const GITHUB_API_URL = "https://api.github.com";

export async function getUserPublicRepos(username: string, token: string) {
  try {
    const response = await axios.get(
      `${GITHUB_API_URL}/users/${username}/repos`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      },
    );

    const repositories: Repository[] = response.data.map((repo: any) => ({
      name: repo.name || "",
      description: repo.description,
      html_url: repo.html_url,
    }));

    return repositories;
  } catch (error) {
    console.error("Error fetching public repositories:", error);
    throw error;
  }
}
