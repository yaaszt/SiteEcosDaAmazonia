import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ShoppingCart, Star, Eye } from "lucide-react";
import { ProductModal } from "./ProductModal";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  description: string;
  detailedDescription: string;
  benefits: string[];
  origin: string;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Açaí Grosso",
    price: "R$ 24,90",
    originalPrice: "R$ 29,90",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd/41173c121991133.60d0e481c5fa9.jpg",
    category: "Superalimentos",
    description: "Açaí puro da Amazônia, rico em antioxidantes",
    detailedDescription:
      "Nosso açaí grosso é colhido diretamente das palmeiras nativas do Pará, processado de forma artesanal para preservar todos os nutrientes naturais. Rico em antioxidantes, ômega 3, 6 e 9, fibras e proteínas vegetais.",
    benefits: [
      "Rico em antioxidantes naturais",
      "Fonte de energia natural",
      "Alto teor de fibras",
      "Fortalece o sistema imunológico",
      "Ajuda no combate ao envelhecimento precoce",
    ],

    origin:
      "Coletado sustentavelmente nas comunidades ribeirinhas do Pará",
    rating: 5,
    reviews: 127,
  },
  {
    id: 2,
    name: "Castanha-do-Pará",
    price: "R$ 32,90",
    image:
      "https://cdn.awsli.com.br/2500x2500/2777/2777231/produto/309441922/castanha-para-semcasca-pequena-kl0qfx30ph.jpg",
    category: "Oleaginosas",
    description:
      "Castanhas selecionadas, fonte de selênio natural",
    detailedDescription:
      "Castanhas-do-Pará de alta qualidade, cuidadosamente selecionadas e processadas para manter sua textura crocante e sabor único. São a maior fonte natural de selênio do mundo, mineral essencial para o bom funcionamento do organismo.",
    benefits: [
      "Maior fonte natural de selênio do mundo",
      "Rica em gorduras boas (ômega 3 e 6)",
      "Fortalece cabelos e unhas",
      "Melhora o funcionamento da tireoide",
      "Ação antioxidante potente",
    ],

    origin:
      "Coletada nas reservas extrativistas do Acre e Amazônia",
    rating: 5,
    reviews: 89,
  },
  {
    id: 3,
    name: "Óleo de Copaíba Medicinal",
    price: "R$ 45,90",
    image:
      "https://i.pinimg.com/736x/eb/6f/a7/eb6fa783c11ee5f975d284f6ec3d71f8.jpg",
    category: "Óleos Medicinais",
    description: "Óleo puro extraído da árvore copaíba",
    detailedDescription:
      "Óleo de copaíba 100% puro, extraído de forma sustentável das árvores centenárias da Amazônia. Conhecido por suas propriedades anti-inflamatórias, cicatrizantes e analgésicas naturais, usado há séculos pelos povos indígenas.",
    benefits: [
      "Poderoso anti-inflamatório natural",
      "Acelera a cicatrização de feridas",
      "Alivia dores musculares e articulares",
      "Propriedades antimicrobianas",
      "Ajuda no tratamento de problemas respiratórios",
    ],

    origin:
      "Extraído sustentavelmente na Floresta Nacional do Tapajós",
    rating: 5,
    reviews: 156,
  },
  {
    id: 4,
    name: "Guaraná em Pó Natural",
    price: "R$ 28,90",
    originalPrice: "R$ 35,90",
    image:
      "https://images.tcdn.com.br/img/img_prod/1073871/guarana_em_po_178_1_525f1f82b93edec7f99f87f857030cab.jpg",
    category: "Superalimentos",
    description: "Guaraná puro, energia natural da Amazônia",
    detailedDescription:
      "Guaraná em pó obtido dos frutos frescos cultivados pelos índios Sateré-Mawé, no coração da Amazônia. Processado de forma tradicional para manter toda a potência energética natural, sem adição de conservantes ou açúcares.",
    benefits: [
      "Energia natural duradoura",
      "Melhora o foco e concentração",
      "Acelera o metabolismo",
      "Rico em antioxidantes",
      "Fonte natural de cafeína",
    ],

    origin:
      "Cultivado tradicionalmente pelos índios Sateré-Mawé no Amazonas",
    rating: 4,
    reviews: 203,
  },
  {
    id: 5,
    name: "Utensílios de Madeira Artesanais",
    price: "R$ 65,90",
    image:
      "https://img.freepik.com/fotos-premium/utensilios-de-cozinha-vintage-de-madeira-feitos-a-mao-para-venda-no-mercado-varias-ferramentas-de-cozinha-de-madeira_588493-406.jpg",
    category: "Artesanato",
    description: "Kit com tigelas e colheres de madeira nobre",
    detailedDescription:
      "Conjunto artesanal de utensílios de madeira nobre amazônica, produzido por artesãos locais de Belém. Cada peça é única, trabalhada à mão com técnicas tradicionais passadas de geração em geração. Madeira tratada com óleos naturais.",
    benefits: [
      "Produção 100% artesanal",
      "Madeira de manejo sustentável",
      "Durabilidade excepcional",
      "Não absorve odores nem sabores",
      "Design único e exclusivo",
    ],

    origin:
      "Produzido por artesãos tradicionais de Belém do Pará",
    rating: 5,
    reviews: 78,
  },
  {
    id: 6,
    name: "Polpa de Cupuaçu Natural",
    price: "R$ 18,90",
    image: "https://deliciosasdescobertas.com.br/wp-content/uploads/2024/07/COMO-FAZER-O-SUCO-DE-COPUACU.png",
    category: "Superalimentos",
    description: "Polpa cremosa da fruta prima do açaí, sabor único",
    detailedDescription:
      "Polpa de cupuaçu 100% natural, extraída da fruta fresca no auge do seu amadurecimento. O cupuaçu é primo do cacau e oferece um sabor único, doce e levemente ácido, muito apreciado na região Norte. Rico em vitaminas, fibras e antioxidantes naturais.",
    benefits: [
      "Rico em vitamina C natural",
      "Fonte de fibras e antioxidantes",
      "Fortalece o sistema imunológico",
      "Sabor único e refrescante",
      "Livre de conservantes artificiais",
    ],

    origin:
      "Coletado nas várzeas do Pará e processado em Belém",
    rating: 5,
    reviews: 94,
  },
];

export function ProductsPage() {
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Todos");

  const categories = [
    "Todos",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-b from-accent to-background overflow-hidden">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Produtos Amazônicos
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Descubra a riqueza natural da Amazônia em cada
              produto, cuidadosamente selecionado e produzido de
              forma sustentável
            </motion.p>
          </div>
        </motion.div>
        
        {/* Elementos decorativos animados */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-16 h-16 bg-secondary/10 rounded-full"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4,
                  delay: 0.8 + index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={
                    selectedCategory === category
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 1.2 + index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                layout
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
                <div className="aspect-square relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="absolute top-3 left-3"
                    >
                      {product.category}
                    </Badge>
                  </motion.div>
                  {product.originalPrice && (
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.4 + index * 0.1 }}
                    >
                      <Badge
                        variant="destructive"
                        className="absolute top-3 right-3"
                      >
                        Oferta
                      </Badge>
                    </motion.div>
                  )}
                  
                  {/* Overlay animado no hover */}
                  <motion.div
                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </div>

                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="space-y-4 flex flex-col flex-grow">
                    <div>
                      <h3 className="font-bold text-primary mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < product.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ),
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-primary">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <motion.div 
                      className="space-y-3 mt-auto pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6 + index * 0.1 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-center border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                          onClick={() => openModal(product)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Ver Detalhes
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button size="sm" className="w-full justify-center bg-primary hover:bg-primary/90 transition-all duration-200">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Adicionar ao Carrinho
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}