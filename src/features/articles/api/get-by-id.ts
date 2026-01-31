import type { Article } from "@/types/article";
import { getAllArticles } from "./get-all";

export async function getArticleById(id: string): Promise<Article | undefined> {
  const articles = await getAllArticles();
  return articles.find((article) => article.id === id);
}
