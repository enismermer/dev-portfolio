import { Card } from "@/components/ui/card"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">A propos de moi</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Photo à gauche */}
            <div className="flex justify-center">
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/moi.png"
                  alt="Photo de Enis"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Développeur passionné</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Je suis un développeur full-stack motivé, spécialisé dans la création 
                  d’applications web modernes et performantes. Mon objectif est de concevoir des solutions utiles, accessibles et innovantes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mon parcours de formation et mes expériences professionnelles m’ont permis de développer une solide expertise en développement web, en consolidant mes compétences aussi bien sur le frontend que sur le backend.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ces expériences m’ont permis de maîtriser le frontend et le backend, de collaborer sur des projets concrets et de rester à jour avec les bonnes pratiques du secteur.
                </p>
              </Card>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-twinkle"></div>
                <span className="text-muted-foreground">{">"} 2 ans d’expérience en développement</span>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-2 h-2 bg-accent rounded-full animate-twinkle"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <span className="text-muted-foreground">{">"} Plus de 10 projets réalisés</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-twinkle" style={{ animationDelay: "1s" }}></div>
                <span className="text-muted-foreground">{">"} Expertise full-stack (Frontend & backend)</span>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-2 h-2 bg-accent rounded-full animate-twinkle"
                  style={{ animationDelay: "1.5s" }}
                ></div>
                <span className="text-muted-foreground">{">"} Pratiques modernes & collaboration en équipe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
