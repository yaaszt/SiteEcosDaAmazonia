import { motion } from 'motion/react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-accent to-background overflow-hidden">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Nossa História
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Descubra a riqueza cultural e artesanal de Belém do Pará, berço da nossa tradição amazônica!
            </motion.p>
          </div>
        </motion.div>
        
        {/* Elementos decorativos flutuantes */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 bg-primary/5 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-secondary/10 rounded-full"
          animate={{ 
            y: [0, 20, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </section>

      {/* Belém Section */}
      <section className="py-20">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2 
                className="text-3xl font-bold text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Belém do Pará
              </motion.h2>
              <motion.p 
                className="text-lg leading-relaxed text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Belém, a capital paraense, é o portal de entrada para a Amazônia e berço de uma rica tradição artesanal, 
                com mais de 400 anos de história, a cidade preserva técnicas ancestrais de produção que são transmitidas 
                de geração em geração.
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Nossa cidade é conhecida por seus mercados tradicionais, onde artesãos locais comercializam produtos 
                únicos feitos com matérias-primas da floresta e é neste ambiente de diversidade cultural que nasceu 
                a Ecos da Amazônia, com o compromisso de valorizar e preservar essas tradições.
              </motion.p>
              <motion.div 
                className="bg-accent p-6 rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold text-primary mb-3">Tradições Preservadas</h3>
                <ul className="space-y-2 text-foreground">
                  {[
                    "Técnicas ancestrais de trabalho em madeira",
                    "Produção sustentável de óleos medicinais", 
                    "Artesanato indígena tradicional",
                    "Processamento natural de frutos amazônicos"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    >
                      • {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1721840992615-ece406c5c534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCZWwlQzMlQTltJTIwUGFyJUMzJUExJTIwQnJhemlsJTIwY2l0eXxlbnwxfHx8fDE3NTY1NzY3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Belém do Pará"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Efeito decorativo */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Artesanato Section */}
      <section className="py-20 bg-muted">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Artesanato Amazônico
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Cada peça conta uma história da floresta, carregando consigo a sabedoria ancestral dos povos amazônicos
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div 
              className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <ImageWithFallback
                src="https://i.pinimg.com/1200x/24/b4/03/24b4032c55c36219c3ecfb20cbc535bf.jpg"
                alt="Artesanato indígena"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Tradição Indígena
              </motion.h3>
              <motion.p 
                className="text-lg leading-relaxed text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                O artesanato indígena representa a essência da cultura amazônica, cada peça é criada com técnicas 
                milenares, utilizando sementes, fibras e madeiras da floresta, os artesãos preservam conhecimentos 
                ancestrais sobre pigmentos naturais e padrões geométricos sagrados.
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Trabalhamos diretamente com comunidades indígenas, garantindo que recebam valor justo pelo seu trabalho 
                e que suas tradições sejam respeitadas e preservadas para as futuras gerações.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="space-y-6 order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Utensílios de Madeira
              </motion.h3>
              <motion.p 
                className="text-lg leading-relaxed text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Os utensílios de madeira amazônica são verdadeiras obras de arte funcionais, são produzidos por mestres 
                artesãos de Belém e interior do Pará, cada peça é única e carrega a história da árvore da qual foi criada.
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Utilizamos apenas madeiras de manejo sustentável, contribuindo para a preservação da floresta enquanto 
                valorizamos o trabalho dos artesãos locais e cada utensílio passa por um processo cuidadoso de seleção 
                e acabamento artesanal.
              </motion.p>
              <motion.div 
                className="bg-background p-6 rounded-lg border"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-semibold text-primary mb-3">Madeiras Utilizadas</h4>
                <div className="grid grid-cols-2 gap-3 text-sm text-foreground">
                  {[
                    "Cedro amazônico",
                    "Pau-brasil",
                    "Cumaru", 
                    "Andiroba",
                    "Maçaranduba",
                    "Ipê"
                  ].map((wood, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    >
                      • {wood}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05, rotateY: -5 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1516143766787-d40ae27fa795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbWF6b24lMjByYWluZm9yZXN0JTIwY3JhZnRzJTIwd29vZGVufGVufDF8fHx8MTc1NjU3Njc0NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Utensílios de madeira"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-primary mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Nossa Missão
            </motion.h2>
            <motion.p 
              className="text-xl leading-relaxed text-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A Ecos da Amazônia nasceu do sonho de conectar a sabedoria ancestral da Amazônia com o mundo moderno, 
              acreditamos que cada produto carrega não apenas a qualidade excepcional da floresta, mas também 
              a responsabilidade de preservar tradições e o meio ambiente.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: "🌱",
                  title: "Sustentabilidade",
                  description: "Produção responsável que preserva a floresta para as futuras gerações"
                },
                {
                  icon: "🤝",
                  title: "Comércio Justo", 
                  description: "Remuneração digna para artesãos e produtores locais"
                },
                {
                  icon: "🏺",
                  title: "Tradição",
                  description: "Preservação de conhecimentos ancestrais e técnicas tradicionais"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center space-y-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5 + index * 0.2,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-2xl text-white">{item.icon}</span>
                  </motion.div>
                  <h3 className="font-semibold text-primary">{item.title}</h3>
                  <p className="text-foreground text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}