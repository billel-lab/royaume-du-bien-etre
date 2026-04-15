-- =====================================================
-- Royaume du Bien-Être — Migration initiale
-- Préfixe: rbe_ (pour projet Supabase "all")
-- =====================================================

-- Catégories de produits
CREATE TABLE IF NOT EXISTS rbe_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  image TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Produits
CREATE TABLE IF NOT EXISTS rbe_products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  compare_price DECIMAL(10,2),
  category_id UUID REFERENCES rbe_categories(id),
  images TEXT[] DEFAULT '{}',
  weight TEXT,
  stock INT DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  ingredients TEXT,
  usage_instructions TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Clients
CREATE TABLE IF NOT EXISTS rbe_clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  city TEXT,
  address TEXT,
  postal_code TEXT,
  country TEXT DEFAULT 'BE',
  total_orders INT DEFAULT 0,
  total_spent DECIMAL(10,2) DEFAULT 0,
  segment TEXT DEFAULT 'nouveau' CHECK (segment IN ('nouveau', 'fidele', 'vip')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Séquence pour les références de commande
CREATE SEQUENCE IF NOT EXISTS rbe_order_seq START 1;

-- Commandes
CREATE TABLE IF NOT EXISTS rbe_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reference TEXT NOT NULL UNIQUE DEFAULT 'RBE-' || lpad(nextval('rbe_order_seq')::text, 3, '0'),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  shipping_address TEXT,
  shipping_city TEXT,
  shipping_postal TEXT,
  shipping_country TEXT DEFAULT 'BE',
  subtotal DECIMAL(10,2) NOT NULL,
  shipping_cost DECIMAL(10,2) DEFAULT 0,
  discount DECIMAL(10,2) DEFAULT 0,
  total DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded')),
  payment_id TEXT,
  payment_method TEXT,
  promo_code TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Articles de commande
CREATE TABLE IF NOT EXISTS rbe_order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES rbe_orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES rbe_products(id),
  product_name TEXT NOT NULL,
  quantity INT NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Contacts (formulaire de contact)
CREATE TABLE IF NOT EXISTS rbe_contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Newsletter
CREATE TABLE IF NOT EXISTS rbe_newsletter (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  subscribed BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Avis clients
CREATE TABLE IF NOT EXISTS rbe_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES rbe_products(id) ON DELETE CASCADE,
  customer_name TEXT NOT NULL,
  rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  text TEXT,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Codes promo
CREATE TABLE IF NOT EXISTS rbe_promos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT NOT NULL UNIQUE,
  type TEXT NOT NULL CHECK (type IN ('percentage', 'fixed')),
  value DECIMAL(10,2) NOT NULL,
  min_order DECIMAL(10,2) DEFAULT 0,
  max_uses INT,
  current_uses INT DEFAULT 0,
  expires_at TIMESTAMPTZ,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Articles de blog
CREATE TABLE IF NOT EXISTS rbe_blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT,
  image TEXT,
  category TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  views INT DEFAULT 0,
  author TEXT DEFAULT 'Royaume du Bien-Être',
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Index
CREATE INDEX IF NOT EXISTS idx_rbe_products_category ON rbe_products(category_id);
CREATE INDEX IF NOT EXISTS idx_rbe_products_active ON rbe_products(is_active);
CREATE INDEX IF NOT EXISTS idx_rbe_products_featured ON rbe_products(is_featured);
CREATE INDEX IF NOT EXISTS idx_rbe_orders_status ON rbe_orders(status);
CREATE INDEX IF NOT EXISTS idx_rbe_orders_created ON rbe_orders(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_rbe_clients_segment ON rbe_clients(segment);
CREATE INDEX IF NOT EXISTS idx_rbe_clients_email ON rbe_clients(email);
CREATE INDEX IF NOT EXISTS idx_rbe_reviews_product ON rbe_reviews(product_id);
CREATE INDEX IF NOT EXISTS idx_rbe_blog_status ON rbe_blog_posts(status);

-- RLS (commenté — à activer après config auth)
-- ALTER TABLE rbe_products ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE rbe_orders ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE rbe_clients ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE rbe_contacts ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE rbe_newsletter ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE rbe_reviews ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE rbe_promos ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE rbe_blog_posts ENABLE ROW LEVEL SECURITY;
