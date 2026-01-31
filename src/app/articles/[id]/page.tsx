/** biome-ignore-all lint/suspicious/noArrayIndexKey: For new lines */
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArticles } from "@/features/articles/api/get-all";
import { getArticleById } from "@/features/articles/api/get-by-id";
import { formatToLong } from "@/lib/format";
import type { Article } from "@/types/article";

export async function generateStaticParams() {
  const ids = await getAllArticles();

  return ids.map((item) => ({
    id: item.id,
  }));
}

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await getArticleById(id);

  if (!article) {
    return { title: "Article non trouvé" };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const article: Article | undefined = await getArticleById(id);

  if (!article) notFound();

  return (
    <section className="container mx-auto p-8 max-w-5xl space-y-4">
      <Link href={"/"} className="flex items-center gap-2">
        <ArrowLeftIcon className="size-5" />
        Retour aux articles
      </Link>

      <div className="relative h-96 w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>
      <div>
        <header className="mb-6">
          <h1 className="text-4xl font-bold mb-3">{article.title}</h1>
          <time
            className="flex items-center text-gray-600 capitalize"
            dateTime={article.createdAt}
          >
            Publié le {formatToLong(article.createdAt)}
          </time>
        </header>

        <div className="prose prose-lg max-w-none">
          {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
