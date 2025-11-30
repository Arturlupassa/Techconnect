import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Zap, Award } from "lucide-react"

const stats = [
  { icon: Users, value: "5000+", label: "Clientes Satisfeitos" },
  { icon: Zap, value: "99.9%", label: "Uptime Garantido" },
  { icon: Award, value: "5 Anos", label: "No Mercado" },
  { icon: CheckCircle, value: "24/7", label: "Suporte" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
              Tecnologia de Ponta para Seu Sucesso Digital
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos especializados em fornecer soluções tecnológicas de alta qualidade que transformam a maneira como
              você consome conteúdo e se comunica online.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nossa missão é democratizar o acesso às melhores ferramentas digitais, oferecendo serviços confiáveis,
              seguros e com suporte especializado.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-medium text-sm">Qualidade Garantida</span>
              </div>
              <div className="px-4 py-2 bg-accent/10 rounded-full">
                <span className="text-accent font-medium text-sm">Suporte Premium</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-medium text-sm">Preços Competitivos</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
