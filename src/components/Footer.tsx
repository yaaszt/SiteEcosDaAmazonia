import { TreePine } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10">
              <TreePine className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Ecos da Amazônia</h3>
              <p className="text-sm text-primary-foreground/80">Produtos Autênticos da Floresta</p>
            </div>
          </div>
          
          {/* Quote */}
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            "A Amazônia é o coração pulsante do nosso planeta, responsável por 20% do oxigênio que respiramos 
            e lar de uma biodiversidade incomparável, proteger e valorizar seus tesouros naturais é proteger 
            o futuro da humanidade e de todas as formas de vida na Terra."
          </p>
        </div>
      </div>
    </footer>
  )
}