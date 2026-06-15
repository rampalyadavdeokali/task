import { Caterer } from "./types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
const API_PREFIX = "/api";

export async function getCaterers(): Promise<Caterer[]> {
  const response = await fetch(`${API_BASE_URL}${API_PREFIX}/caterers`, {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Unable to fetch caterers. Please make sure the backend is running.");
  }

  return response.json();
}
