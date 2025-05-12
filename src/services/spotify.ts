import { SpotifyApi } from "@spotify/web-api-ts-sdk";

if (!import.meta.env.VITE_SPOTIFY_CLIENT_ID || !import.meta.env.VITE_SPOTIFY_CLIENT_SECRET) {
  throw new Error("Spotify Client ID and Client Secret must be provided");
}

export const api = SpotifyApi.withUserAuthorization(
  import.meta.env.VITE_SPOTIFY_CLIENT_ID as string,
  "https://www.iamfelixk.de/callback",
  ["user-read-currently-playing"],
);

export async function getCurrentlyPlayingTrack() {
  try {
    const response = await api.player.getCurrentlyPlayingTrack();
    return response;
  }
  catch (error) {
    console.error("Error fetching currently playing track:", error);
    throw error;
  }
}
