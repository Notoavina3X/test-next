import Image from "next/image";
import Link from "next/link";
import { formatToLong } from "@/lib/format";
import type { Article } from "@/types/article";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <article className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
      <Link href={`/articles/${article.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-4 grid gap-2">
          <h3 className="text-xl font-semibold">{article.title}</h3>
          <p className="text-gray-600 line-clamp-1">{article.description}</p>
          <time
            className="text-sm text-gray-500 capitalize"
            dateTime={article.createdAt}
          >
            {formatToLong(article.createdAt)}
          </time>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
