import data from "@/data/articles.json";
import type { Article } from "@/types/article";

export async function getAllArticles(): Promise<Article[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data as Article[];
}
