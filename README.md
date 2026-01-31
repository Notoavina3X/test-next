# Blog Next.js - Test Technique

## Fonctionnalités

- ✅ ISR (Incremental Static Regeneration) avec revalidation 60s
- ✅ SSG (Static Site Generation) avec generateStaticParams
- ✅ Optimisation des images avec next/image
- ✅ Navigation optimisée avec next/link
- ✅ TypeScript strict (pas de any)
- ✅ API Route pour récupérer les articles

## Installation
```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Structure

- `app/` - Pages et layouts (App Router)
- `components/` - Composants React
- `features/` - Organisation logique pour chaque feature
- `lib/` - Fonctions utilitaires
- `types/` - Définitions TypeScript
- `data/` - Données statiques
- `public/images/` - Images optimisées

## Technologies

- Next.js v16.1.6
- TypeScript v5
- Tailwind CSS v4
- App Router