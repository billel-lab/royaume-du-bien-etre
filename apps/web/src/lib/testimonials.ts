export interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
  product: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Djaffar A.',
    location: 'Belgique',
    rating: 5,
    text: "En plus d'avoir récupéré ma commande rapidement j'ai essayé les produits qui sont tous de qualité incroyable. Je recommande vivement !",
    product: 'Coffret Découverte',
  },
  {
    name: 'Farah E.',
    location: 'Belgique',
    rating: 5,
    text: "Incroyable ! Ce gel nettoyant laisse la peau ultra douce... mon visage est devenu plus lumineux je recommande à 100%.",
    product: 'Gel nettoyant au Nila',
  },
  {
    name: 'Oula Z.',
    location: 'Belgique',
    rating: 5,
    text: "Un gommage qui laisse la peau toute douce et une odeur dont on ne se lasse pas !",
    product: 'Gommage Aker Fassi',
  },
  {
    name: 'Samira K.',
    location: 'France',
    rating: 5,
    text: "Le coffret Beauté Précieuse est magnifique. Les produits sont d'une qualité exceptionnelle. Ma peau n'a jamais été aussi douce.",
    product: 'Coffret Beauté Précieuse',
  },
  {
    name: 'Nadia M.',
    location: 'Belgique',
    rating: 5,
    text: "L'huile d'argan est incroyable ! Pure et naturelle, on sent vraiment la différence. Je ne peux plus m'en passer.",
    product: "Huile d'argan 100% naturelle",
  },
  {
    name: 'Yasmine B.',
    location: 'France',
    rating: 5,
    text: "Après des mois de chute de cheveux, l'élixir anti-chute a fait des merveilles. Mes cheveux sont plus forts et repoussent.",
    product: 'Élixir anti-chute',
  },
]
