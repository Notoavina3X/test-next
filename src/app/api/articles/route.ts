import { NextResponse } from "next/server";
import { getAllArticles } from "@/features/articles/api/get-all";
import type { Article } from "@/types/article";

export async function GET() {
  try {
    const articles = await getAllArticles();

    return NextResponse.json(
      {
        success: true,
        articles,
        count: articles.length,
      },
      { status: 200 },
    );
  } catch (_error) {
    return NextResponse.json(
      {
        success: false,
        error: "Erreur lors de la récupération des articles",
      },
      { status: 500 },
    );
  }
}

export type ArticlesResponse = {
  success: boolean;
  articles?: Article[];
  count?: number;
  error?: string;
};
