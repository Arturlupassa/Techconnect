import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tv, Shield, Bot, ArrowRight } from "lucide-react"

const products = [
  {
    icon: Tv,
    title: "IPTV Premium",
    description: "Acesso a milhares de canais em alta definição com streaming estável e sem travamentos.",
    features: ["+10.000 canais", "Full HD e 4K", "Suporte 24/7", "Teste grátis"],
    color: "primary",
  },
  {
    icon: Shield,
    title: "VPN Segura",
    description: "Navegação privada e segura com servidores em diversos países e velocidade garantida.",
    features: ["Sem logs", "Velocidade máxima", "50+ países", "Proteção total"],
    color: "accent",
  },
  {
    icon: Bot,
    title: "Bots Inteligentes",
    description: "Automatize seu atendimento no WhatsApp e Telegram com bots personalizados e eficientes.",
    features: ["Totalmente customizável", "IA integrada", "Multi-plataforma", "Fácil configuração"],
    color: "primary",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Nossos Produtos</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Soluções tecnológicas completas para atender todas as suas necessidades digitais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-${product.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-6 h-6 text-${product.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full group/btn">
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
