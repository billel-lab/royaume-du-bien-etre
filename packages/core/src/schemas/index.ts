import { z } from 'zod'

// Statuts de commande
export const orderStatusEnum = z.enum(['new', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'])
export type OrderStatus = z.infer<typeof orderStatusEnum>

// Statuts de contact
export const contactStatusEnum = z.enum(['new', 'confirmed', 'completed', 'cancelled'])
export type ContactStatus = z.infer<typeof contactStatusEnum>

// Segment client
export const clientSegmentEnum = z.enum(['nouveau', 'fidele', 'vip'])
export type ClientSegment = z.infer<typeof clientSegmentEnum>

// Produit
export const productSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string(),
  price: z.number().positive(),
  compare_price: z.number().positive().optional(),
  category_id: z.string().uuid().optional(),
  images: z.array(z.string().url()),
  weight: z.string().optional(),
  stock: z.number().int().min(0),
  is_featured: z.boolean().default(false),
  is_active: z.boolean().default(true),
  created_at: z.string().datetime(),
})
export type Product = z.infer<typeof productSchema>

// Catégorie
export const categorySchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().optional(),
  image: z.string().url().optional(),
  order: z.number().int().default(0),
})
export type Category = z.infer<typeof categorySchema>

// Commande
export const orderSchema = z.object({
  id: z.string().uuid(),
  reference: z.string(),
  customer_name: z.string(),
  customer_email: z.string().email(),
  customer_phone: z.string(),
  shipping_address: z.string(),
  shipping_city: z.string(),
  shipping_postal: z.string(),
  shipping_country: z.string().default('BE'),
  items: z.array(z.object({
    product_id: z.string().uuid(),
    product_name: z.string(),
    quantity: z.number().int().positive(),
    unit_price: z.number().positive(),
  })),
  subtotal: z.number(),
  shipping_cost: z.number(),
  total: z.number(),
  status: orderStatusEnum,
  payment_id: z.string().optional(),
  payment_method: z.string().optional(),
  notes: z.string().optional(),
  created_at: z.string().datetime(),
})
export type Order = z.infer<typeof orderSchema>

// Client
export const clientSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  city: z.string().optional(),
  total_orders: z.number().int().default(0),
  total_spent: z.number().default(0),
  segment: clientSegmentEnum.default('nouveau'),
  created_at: z.string().datetime(),
})
export type Client = z.infer<typeof clientSchema>

// Contact form
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Le sujet est requis'),
  message: z.string().min(10, 'Le message doit faire au moins 10 caractères'),
})
export type ContactForm = z.infer<typeof contactFormSchema>

// Newsletter
export const newsletterSchema = z.object({
  email: z.string().email('Email invalide'),
})
export type Newsletter = z.infer<typeof newsletterSchema>

// Cart item
export const cartItemSchema = z.object({
  product_id: z.string().uuid(),
  name: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
  image: z.string(),
  slug: z.string(),
})
export type CartItem = z.infer<typeof cartItemSchema>
