"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { ReactTyped } from "react-typed"

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("projects")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Nom et prénom */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Enis Mermer
          </h1>

          {/* Animation typing pour le métier */}
          <div className="text-xl md:text-2xl text-primary font-semibold mb-6">
            <ReactTyped
              strings={[
                "Développeur Full Stack",
                "Passionné de Web",
                "Créateur d’expériences numériques",
                "Amateur de design avec Figma",
                "Curieux et toujours en apprentissage",
              ]}
              typeSpeed={60}
              backSpeed={40}
              backDelay={1500}
              loop
            />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Créer des expériences numériques avec des technologies modernes et un code propre
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" onClick={scrollToAbout} className="group cursor-pointer">
              Explorer mes projets
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <div className="flex items-center gap-4">
              <a href="https://github.com/enismermer" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="cursor-pointer">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/enis-mermer/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="cursor-pointer">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:enismermer38@gmail.com">
                <Button variant="outline" size="icon" className="cursor-pointer">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="animate-float">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
