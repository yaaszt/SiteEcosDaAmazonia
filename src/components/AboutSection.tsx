import { Leaf, Shield, Recycle, Heart } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const values = [
  {
    icon: <Leaf className="h-12 w-12 text-primary" />,
    title: "Sustentabilidade",
    description: "Cada produto é obtido de forma responsável, respeitando os ciclos naturais e preservando a biodiversidade amazônica."
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Pureza Natural",
    description: "Produtos 100% naturais, livres de químicos e aditivos artificiais, preservando suas propriedades originais."
  },
  {
    icon: <Recycle className="h-12 w-12 text-primary" />,
    title: "Economia Solidária",
    description: "Comércio justo que valoriza o trabalho das comunidades amazônicas e promove seu desenvolvimento sustentável."
  },
  {
    icon: <Heart className="h-12 w-12 text-primary" />,
    title: "Impacto Social",
    description: "Parte da renda é reinvestida em projetos de educação ambiental e preservação da cultura indígena."
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Natureza que Alimenta a Vida
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Somos mais que uma loja de produtos naturais. Somos guardiões dos tesouros 
              amazônicos, conectando você à sabedoria ancestral da maior floresta do mundo.
            </p>
            <p className="text-muted-foreground mb-8">
              Nascemos do amor pela Amazônia e da missão de valorizar sua biodiversidade única. 
              Cada produto em nossa curadoria é selecionado diretamente das comunidades locais, 
              respeitando tradições milenares e promovendo o desenvolvimento sustentável da região.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">15k+</div>
                <div className="text-sm text-muted-foreground">Famílias Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">8 anos</div>
                <div className="text-sm text-muted-foreground">Preservando Tradições</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">50</div>
                <div className="text-sm text-muted-foreground">Comunidades Parceiras</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1599295532523-80403e6cac80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwaGVyb3xlbnwxfHx8fDE3NTY1NzU1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tecnologia sustentável"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <Leaf className="h-8 w-8 mx-auto mb-2" />
                <div className="text-sm font-medium">100% Verde</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Nossos Valores Naturais
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Como as raízes de uma grande árvore, nossos valores sustentam 
              tudo o que fazemos e representamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {value.icon}
                  </div>
                </div>
                <h4 className="font-semibold mb-3">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Nossa Missão Amazônica
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "Levar os tesouros da Amazônia para todo o Brasil, valorizando a sabedoria 
            ancestral e promovendo o desenvolvimento sustentável das comunidades locais. 
            Somos a ponte entre a floresta e sua mesa, entre tradição e bem-estar."
          </p>
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-2 text-primary">
              <Heart className="h-5 w-5" />
              <span className="font-medium">Feito com amor pela Amazônia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}