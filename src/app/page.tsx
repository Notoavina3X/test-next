import ArticleCard from "@/components/article-card";
import { getAllArticles } from "@/features/articles/api/get-all";
import type { Article } from "@/types/article";

export const revalidate = 60;

export default async function Home() {
  const data: Article[] = await getAllArticles();
  return (
    <section className="flex flex-col gap-4 min-h-screen container bg-background mx-auto py-8 px-4">
      <h3 className="text-3xl font-bold">Articles recents</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
