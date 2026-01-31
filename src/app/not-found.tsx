import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      <p className="text-xl text-gray-600 mb-8">
        Désolé, cet article n'existe pas.
      </p>
      <Link
        href="/"
        className="inline-block bg-foreground text-background px-6 py-3 rounded-lg hover:bg-foreground/80 transition-colors"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
