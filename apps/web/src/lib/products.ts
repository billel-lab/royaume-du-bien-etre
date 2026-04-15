export interface Product {
  id: string
  name: string
  slug: string
  price: number
  compare_price?: number
  category: string
  categorySlug: string
  image: string
  images?: string[]
  rating?: number
  reviews?: number
  stock: number
  badge?: 'best-seller' | 'nouveau' | 'promo' | 'exclusif'
  description?: string
  ingredients?: string
  usage?: string
  is_featured?: boolean
}

export interface Category {
  name: string
  slug: string
  count: number
  image: string
}

export const categories: Category[] = [
  { name: 'Coffrets', slug: 'coffrets', count: 5, image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/05/ab37215f-42a9-4a6a-b85b-8aa67a1aaf7f-300x300.png' },
  { name: 'Crèmes', slug: 'cremes', count: 3, image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/02/d4451d24-e9af-47b0-8e6d-12213e618255-300x300.png' },
  { name: 'Soins Visage', slug: 'visage', count: 3, image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/02/4cdff879-ffc1-46cf-854c-117bec835dfa-300x300.png' },
  { name: 'Soins Capillaires', slug: 'capillaires', count: 5, image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/08/untitled-0-19-300x300.png' },
  { name: 'Huiles Cosmétiques', slug: 'huiles', count: 4, image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/02/49b521ff-7771-4ac0-85f1-a61a526c5de1-1-300x300.png' },
  { name: 'Soins Nettoyants', slug: 'nettoyants', count: 6, image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/03/b37e9df9-ff76-4399-b98e-01131bbcc61c-300x300.png' },
  { name: 'Soins des Yeux', slug: 'yeux', count: 3, image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/05/964fba5f-3786-454e-a66a-3aa4b35c4ecc-300x300.jpg' },
  { name: 'Soins Corps', slug: 'corps', count: 2, image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/08/e5fb2b16-944e-4a5f-8424-bda7d1bd1795-1-300x300.png' },
  { name: 'Soins Hommes', slug: 'hommes', count: 1, image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/03/a6e427b5-9560-4888-af5f-b5d45d28c821-300x300.png' },
]

export const products: Product[] = [
  // === COFFRETS ===
  {
    id: 'p1',
    name: 'Coffret Beauté Précieuse',
    slug: 'coffret-beaute-precieuse',
    price: 62.90,
    category: 'Coffrets',
    categorySlug: 'coffrets',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/05/ab37215f-42a9-4a6a-b85b-8aa67a1aaf7f-300x300.png',
    stock: 12,
    badge: 'best-seller',
    is_featured: true,
    description: "Notre coffret phare réunissant les meilleurs soins à base d'huile d'argan bio et de rose de Damas. Un rituel de beauté complet pour une peau éclatante de santé.",
    ingredients: "Huile d'argan bio, Eau de rose de Damas, Beurre de karité, Huile de nigelle, Vitamine E",
  },
  {
    id: 'p2',
    name: "Coffret Capillaire Lumière d'Argan",
    slug: 'coffret-capillaire-lumiere-dargan',
    price: 28.90,
    category: 'Coffrets',
    categorySlug: 'coffrets',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/05/PHOTO-2025-05-02-14-48-09-300x300.jpg',
    stock: 18,
    is_featured: true,
    description: "Un coffret dédié à la beauté de vos cheveux. Shampoing, sérum et masque à base d'huile d'argan bio pour des cheveux brillants et nourris.",
  },
  {
    id: 'p3',
    name: 'Coffret Trésors de Nigelle',
    slug: 'coffret-tresors-de-nigelle',
    price: 37.90,
    category: 'Coffrets',
    categorySlug: 'coffrets',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/05/2ac6fc85-a97b-4263-8ba8-8727b3e3a2a5-300x300.png',
    stock: 9,
    badge: 'nouveau',
    is_featured: true,
    description: "Découvrez les bienfaits ancestraux de la nigelle à travers ce coffret exclusif. Huile, savon et soin combinés pour une routine beauté complète.",
  },
  {
    id: 'p4',
    name: 'Coffret Douceur de Rose',
    slug: 'coffret-douceur-de-rose',
    price: 37.90,
    category: 'Coffrets',
    categorySlug: 'coffrets',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/05/PHOTO-2025-05-02-14-50-07-300x300.jpg',
    stock: 0,
    description: "Un coffret aux senteurs délicates de rose pour un moment de douceur. Savon, eau de rose et crème hydratante réunis dans un écrin raffiné.",
  },
  {
    id: 'p5',
    name: 'Coffret Découverte',
    slug: 'coffret-decouverte',
    price: 25.90,
    category: 'Coffrets',
    categorySlug: 'coffrets',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/05/PHOTO-2025-05-02-14-49-01-300x300.jpg',
    stock: 22,
    is_featured: true,
    description: "Le coffret idéal pour découvrir nos produits phares. Une sélection de nos meilleures ventes en format découverte.",
  },

  // === CRÈMES ===
  {
    id: 'p6',
    name: 'Crème hydratante au Nila',
    slug: 'creme-hydratante-au-nila',
    price: 17.90,
    category: 'Crèmes',
    categorySlug: 'cremes',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/02/d4451d24-e9af-47b0-8e6d-12213e618255-300x300.png',
    rating: 5.0,
    reviews: 12,
    stock: 25,
    description: "Crème hydratante enrichie en Nila (indigo naturel) pour un teint unifié et lumineux. Hydrate en profondeur et protège la peau des agressions extérieures.",
  },
  {
    id: 'p7',
    name: "Crème de nuit à l'huile d'argan bio et graines de figue de barbarie",
    slug: 'creme-de-nuit-argan-figue-barbarie',
    price: 18.90,
    category: 'Crèmes',
    categorySlug: 'cremes',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/02/5f8d7079-cd78-4283-8481-cfaec883821a-300x300.png',
    rating: 5.0,
    reviews: 8,
    stock: 15,
    description: "Soin de nuit régénérant à l'huile d'argan bio et graines de figue de barbarie. Nourrit et répare la peau pendant le sommeil.",
  },
  {
    id: 'p8',
    name: "Crème de jour à l'huile d'argan bio et extrait de rose",
    slug: 'creme-de-jour-argan-rose',
    price: 22.90,
    category: 'Crèmes',
    categorySlug: 'cremes',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/02/ad8b07b9-8110-4c0d-b19c-076e5a67ce17-300x300.png',
    rating: 5.0,
    reviews: 15,
    stock: 20,
    is_featured: true,
    description: "Crème de jour luxueuse à l'huile d'argan bio et pétales de rose. Hydrate, protège et illumine le teint tout au long de la journée.",
  },

  // === SOINS VISAGE ===
  {
    id: 'p9',
    name: 'Masque Aker Afassi (pétales de coquelicot et écorce de grenade)',
    slug: 'masque-aker-afassi',
    price: 16.90,
    category: 'Soins Visage',
    categorySlug: 'visage',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/02/4cdff879-ffc1-46cf-854c-117bec835dfa-300x300.png',
    rating: 5.0,
    reviews: 10,
    stock: 30,
    description: "Masque traditionnel marocain aux pétales de coquelicot et écorce de grenade. Éclat naturel et teint rosé garanti.",
  },
  {
    id: 'p10',
    name: 'Gommage visage Aker Afassi (pétales de coquelicot et écorce de grenade)',
    slug: 'gommage-visage-aker-afassi',
    price: 16.90,
    category: 'Soins Visage',
    categorySlug: 'visage',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/02/776dd176-aa65-4ccf-bd5a-6577d0964878-300x300.png',
    rating: 5.0,
    reviews: 14,
    stock: 28,
    description: "Gommage visage aux pétales de coquelicot et écorce de grenade. Exfolie en douceur pour une peau nette et lumineuse.",
  },
  {
    id: 'p11',
    name: "Sérum visage à l'acide hyaluronique",
    slug: 'serum-visage-acide-hyaluronique',
    price: 23.90,
    category: 'Soins Visage',
    categorySlug: 'visage',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/03/95cbf925-9f70-4f2a-ad3e-c6bf9187f135-300x300.png',
    stock: 16,
    description: "Sérum concentré à l'acide hyaluronique pour une hydratation intense. Repulpe et lisse la peau visiblement.",
  },

  // === SOINS CAPILLAIRES ===
  {
    id: 'p12',
    name: 'Coffret anti-chute et repousse capillaire',
    slug: 'coffret-anti-chute-repousse-capillaire',
    price: 29.90,
    category: 'Soins Capillaires',
    categorySlug: 'capillaires',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/08/untitled-0-19-300x300.png',
    stock: 14,
    is_featured: true,
    description: "Un coffret complet pour lutter contre la chute de cheveux et favoriser la repousse. Formule naturelle enrichie en huiles essentielles.",
  },
  {
    id: 'p13',
    name: 'Shampoing anti-chute aux huiles essentielles',
    slug: 'shampoing-anti-chute-huiles-essentielles',
    price: 14.90,
    category: 'Soins Capillaires',
    categorySlug: 'capillaires',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/08/untitled-0-24-300x300.png',
    stock: 45,
    is_featured: true,
    description: "Shampoing fortifiant aux huiles essentielles contre la chute de cheveux. Stimule le cuir chevelu et renforce la fibre capillaire.",
  },
  {
    id: 'p14',
    name: 'Shampoing Nutrition Argan Bio et Jasmin',
    slug: 'shampoing-nutrition-argan-bio-jasmin',
    price: 12.90,
    category: 'Soins Capillaires',
    categorySlug: 'capillaires',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/05/PHOTO-2025-05-02-14-52-13-300x300.jpg',
    stock: 32,
    description: "Shampoing nourrissant à l'huile d'argan bio et jasmin. Cheveux doux, brillants et parfumés.",
  },
  {
    id: 'p15',
    name: "Sérum capillaire à l'huile d'argan bio et bêta-carotène",
    slug: 'serum-capillaire-argan-bio',
    price: 18.90,
    category: 'Soins Capillaires',
    categorySlug: 'capillaires',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/02/b2498bea-8d75-41ad-bd17-abd3af95983a-300x300.png',
    stock: 20,
    description: "Sérum capillaire précieux à l'huile d'argan bio et bêta-carotène. Nourrit, protège et fait briller les cheveux.",
  },
  {
    id: 'p16',
    name: 'Élixir anti-chute 100% naturel',
    slug: 'elixir-anti-chute-naturel',
    price: 17.90,
    category: 'Soins Capillaires',
    categorySlug: 'capillaires',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/02/3d533bc2-1185-459a-908d-194f84272e36-300x300.png',
    rating: 5.0,
    reviews: 7,
    stock: 19,
    description: "Élixir concentré 100% naturel pour lutter efficacement contre la chute de cheveux. Résultats visibles dès 4 semaines.",
  },

  // === HUILES COSMÉTIQUES ===
  {
    id: 'p17',
    name: "Huile d'argan 100% naturelle",
    slug: 'huile-dargan-100-naturelle',
    price: 17.90,
    category: 'Huiles Cosmétiques',
    categorySlug: 'huiles',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/02/49b521ff-7771-4ac0-85f1-a61a526c5de1-1-300x300.png',
    rating: 5.0,
    reviews: 22,
    stock: 35,
    is_featured: true,
    description: "Huile d'argan 100% pure et naturelle, pressée à froid. L'or liquide du Maroc pour le visage, le corps et les cheveux.",
  },
  {
    id: 'p18',
    name: 'Huile de Nigelle Marocaine',
    slug: 'huile-de-nigelle-marocaine',
    price: 13.90,
    category: 'Huiles Cosmétiques',
    categorySlug: 'huiles',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/03/46404e70-4dbd-4525-9651-8e04c17d149d-300x300.png',
    stock: 27,
    description: "Huile de nigelle marocaine de première pression à froid. Reconnue pour ses propriétés purifiantes et régénérantes.",
  },
  {
    id: 'p19',
    name: 'Huile de Nigelle Éthiopienne Habachiya',
    slug: 'huile-de-nigelle-ethiopienne-habachiya',
    price: 14.90,
    category: 'Huiles Cosmétiques',
    categorySlug: 'huiles',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/03/huile-de-nigelle-habachia-assali-300x300.jpg',
    rating: 5.0,
    reviews: 9,
    stock: 23,
    description: "Huile de nigelle éthiopienne Habachiya de qualité premium. La plus puissante des nigelles, riche en thymoquinone.",
  },
  {
    id: 'p20',
    name: 'My Nigelly',
    slug: 'my-nigelly',
    price: 7.90,
    category: 'Huiles Cosmétiques',
    categorySlug: 'huiles',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/03/Photoroom-20250308_113624-300x300.png',
    rating: 5.0,
    reviews: 6,
    stock: 40,
    description: "Format voyage de notre huile de nigelle. Pratique et facile à emporter partout avec vous.",
  },

  // === SOINS NETTOYANTS ===
  {
    id: 'p21',
    name: 'Eau de rose de Damas bio',
    slug: 'eau-de-rose-de-damas-bio',
    price: 7.90,
    category: 'Soins Nettoyants',
    categorySlug: 'nettoyants',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/03/b37e9df9-ff76-4399-b98e-01131bbcc61c-300x300.png',
    rating: 5.0,
    reviews: 18,
    stock: 50,
    description: "Eau de rose de Damas 100% bio et pure. Tonifie, apaise et purifie la peau. Un indispensable de la routine beauté marocaine.",
  },
  {
    id: 'p22',
    name: 'Savon Noir à la Nigelle',
    slug: 'savon-noir-a-la-nigelle',
    price: 8.90,
    category: 'Soins Nettoyants',
    categorySlug: 'nettoyants',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/03/PHOTO-2025-02-18-22-17-15-1-300x300.jpg',
    stock: 38,
    description: "Savon noir traditionnel enrichi à l'huile de nigelle. Nettoie en profondeur et prépare la peau au gommage.",
  },
  {
    id: 'p23',
    name: 'Savon pétales de rose',
    slug: 'savon-petales-de-rose',
    price: 9.90,
    category: 'Soins Nettoyants',
    categorySlug: 'nettoyants',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/03/5997e7d7-0de5-4d40-9223-97eea192d577-300x300.png',
    rating: 5.0,
    reviews: 5,
    stock: 0,
    description: "Savon artisanal aux pétales de rose naturels. Mousse onctueuse et parfum délicat pour un moment de douceur.",
  },
  {
    id: 'p24',
    name: 'Savon Nigelle',
    slug: 'savon-nigelle',
    price: 9.90,
    category: 'Soins Nettoyants',
    categorySlug: 'nettoyants',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/03/34211cbc-3d2f-4388-b4ca-0c6c1cfcc7be-300x300.png',
    rating: 5.0,
    reviews: 11,
    stock: 29,
    description: "Savon naturel à la nigelle pour peaux sensibles et à imperfections. Purifie et régule le sébum.",
  },
  {
    id: 'p25',
    name: "Savon Miel et Lait d'Avoine",
    slug: 'savon-miel-lait-avoine',
    price: 9.90,
    category: 'Soins Nettoyants',
    categorySlug: 'nettoyants',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/03/45243fc6-fe0e-4479-9488-754c46d1c264-300x300.png',
    stock: 33,
    description: "Savon doux au miel et lait d'avoine. Nourrit et adoucit les peaux les plus sensibles.",
  },
  {
    id: 'p26',
    name: 'Savon Café Cacao',
    slug: 'savon-cafe-cacao',
    price: 9.90,
    category: 'Soins Nettoyants',
    categorySlug: 'nettoyants',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/03/4b0097ff-8488-4128-92a8-404b9be40265-300x300.png',
    stock: 26,
    description: "Savon exfoliant naturel au café et cacao. Stimule la circulation et laisse la peau douce et parfumée.",
  },

  // === SOINS DES YEUX ===
  {
    id: 'p27',
    name: 'Soin pousse cils et sourcils',
    slug: 'soin-pousse-cils-sourcils',
    price: 9.90,
    category: 'Soins des Yeux',
    categorySlug: 'yeux',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/05/964fba5f-3786-454e-a66a-3aa4b35c4ecc-300x300.jpg',
    rating: 4.0,
    reviews: 3,
    stock: 17,
    description: "Soin naturel pour favoriser la pousse et la densité des cils et sourcils. Application facile au quotidien.",
  },
  {
    id: 'p28',
    name: 'Khôl naturel bleu roi',
    slug: 'khol-naturel-bleu-roi',
    price: 8.90,
    category: 'Soins des Yeux',
    categorySlug: 'yeux',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/03/Photoroom-20250308_114631-300x300.png',
    stock: 24,
    description: "Khôl traditionnel bleu roi pour un regard intense et profond. Formule naturelle sans produits chimiques.",
  },
  {
    id: 'p29',
    name: 'Khôl naturel noir',
    slug: 'khol-naturel-noir',
    price: 8.90,
    category: 'Soins des Yeux',
    categorySlug: 'yeux',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/03/3b0898b4-6581-4a7d-ad71-e090eca0c934-300x300.png',
    stock: 31,
    description: "Khôl noir traditionnel pour sublimer le regard. Application précise grâce au bâtonnet inclus.",
  },

  // === SOINS CORPS ===
  {
    id: 'p30',
    name: 'Huile de massage parfum vanille 100% naturelle',
    slug: 'huile-massage-vanille',
    price: 14.90,
    category: 'Soins Corps',
    categorySlug: 'corps',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/08/e5fb2b16-944e-4a5f-8424-bda7d1bd1795-1-300x300.png',
    stock: 21,
    is_featured: true,
    description: "Huile de massage 100% naturelle au parfum envoûtant de vanille. Détend les muscles et nourrit la peau.",
  },
  {
    id: 'p31',
    name: 'Baume déodorant naturel',
    slug: 'baume-deodorant-naturel',
    price: 11.90,
    category: 'Soins Corps',
    categorySlug: 'corps',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/03/4c7a660c-85c8-4370-bd3b-6a9d070d5b1c-300x300.png',
    rating: 5.0,
    reviews: 4,
    stock: 0,
    description: "Baume déodorant 100% naturel et efficace. Sans aluminium, sans alcool. Protection longue durée.",
  },

  // === SOINS HOMMES ===
  {
    id: 'p32',
    name: 'Baume à barbe',
    slug: 'baume-a-barbe',
    price: 12.90,
    category: 'Soins Hommes',
    categorySlug: 'hommes',
    image: 'https://royaumedubienetre.fr/wp-content/uploads/2025/03/a6e427b5-9560-4888-af5f-b5d45d28c821-300x300.png',
    rating: 5.0,
    reviews: 6,
    stock: 15,
    description: "Baume à barbe naturel pour discipliner, nourrir et adoucir la barbe. Parfum boisé subtil.",
  },
]

export const featuredProducts = products.filter((p) => p.is_featured)

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  if (categorySlug === 'all') return products
  return products.filter((p) => p.categorySlug === categorySlug)
}

export const LOGO_URL = 'https://royaumedubienetre.fr/wp-content/uploads/2025/01/Logo-fond-transparent-police-dore-e1771334009986.png'

export const FREE_SHIPPING_THRESHOLD = 79
