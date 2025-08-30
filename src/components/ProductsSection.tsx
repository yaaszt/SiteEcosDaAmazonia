import { ProductCard } from './ProductCard'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

const products = [
  {
    id: 1,
    name: "Açaí Premium Orgânico 500g",
    price: 4590,
    originalPrice: 5290,
    image: "https://images.unsplash.com/photo-1756383254072-6e2dae37b6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FpJTIwYm93bCUyMHN1cGVyZm9vZCUyMG9yZ2FuaWN8ZW58MXx8fHwxNzU2NTc2MjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    reviews: 1234,
    isNew: true,
    isSale: true,
    category: "superalimentos"
  },
  {
    id: 2,
    name: "Castanha-do-Pará 200g",
    price: 2890,
    image: "https://images.unsplash.com/photo-1701589838917-db626631d9f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBudXRzJTIwbmF0dXJhbCUyMG9yZ2FuaWN8ZW58MXx8fHwxNzU2NTc2MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 892,
    badge: "Bestseller",
    category: "nuts"
  },
  {
    id: 3,
    name: "Óleo de Copaíba Puro 30ml",
    price: 8990,
    originalPrice: 10990,
    image: "https://images.unsplash.com/photo-1640958903174-936043ea7c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3BhaWJhJTIwb2lsJTIwZXNzZW50aWFsJTIwbmF0dXJhbHxlbnwxfHx8fDE3NTY1NzYyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    reviews: 567,
    isSale: true,
    category: "oleos"
  },
  {
    id: 4,
    name: "Guaraná Natural em Pó 100g",
    price: 3590,
    image: "https://images.unsplash.com/photo-1689163351112-588662289d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWFyYW5hJTIwcG93ZGVyJTIwbmF0dXJhbCUyMGVuZXJneXxlbnwxfHx8fDE3NTY1NzYyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    reviews: 734,
    isNew: true,
    category: "energeticos"
  },
  {
    id: 5,
    name: "Colar Artesanal Indígena",
    price: 12500,
    originalPrice: 15900,
    image: "https://images.unsplash.com/photo-1740819920986-8462590eccdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGluZGlnZW5vdXMlMjBqZXdlbHJ5JTIwbmF0dXJhbHxlbnwxfHx8fDE3NTY1NzYyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    reviews: 423,
    isSale: true,
    badge: "Artesanal",
    category: "artesanato"
  },
  {
    id: 6,
    name: "Cacau Orgânico 250g",
    price: 3890,
    image: "https://images.unsplash.com/photo-1647532198028-0e14fe8ea54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWNhbyUyMGNob2NvbGF0ZSUyMG5hdHVyYWwlMjBvcmdhbmljfGVufDF8fHx8MTc1NjU3NjIzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 678,
    category: "cacau"
  }
]

const categories = [
  { id: "all", name: "Todos" },
  { id: "superalimentos", name: "Superalimentos" },
  { id: "nuts", name: "Nuts & Sementes" },
  { id: "oleos", name: "Óleos Essenciais" },
  { id: "artesanato", name: "Artesanato" },
  { id: "cacau", name: "Cacau" }
]

export function ProductsSection() {
  const getFilteredProducts = (category: string) => {
    if (category === "all") return products
    return products.filter(product => product.category === category)
  }

  return (
    <section id="products" className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tesouros da Amazônia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Produtos autênticos que carregam toda a riqueza e sabedoria ancestral
            da maior floresta do mundo.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-xs md:text-sm"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getFilteredProducts(category.id).map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Carregar Mais Produtos
          </Button>
        </div>
      </div>
    </section>
  )
}