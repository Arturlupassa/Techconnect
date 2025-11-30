import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-medium text-sm">Soluções Tech Premium</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
            Transforme Sua Experiência Digital com Nossas Soluções
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Oferecemos IPTV de alta qualidade, VPN segura e bots inteligentes para WhatsApp e Telegram. Tecnologia de
            ponta para impulsionar seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group">
              Ver Produtos
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
