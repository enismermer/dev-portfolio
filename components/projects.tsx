"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Sapin de Noël",
      description:
        "Une représentation festive d'un sapin de Noël créée uniquement avec du HTML et du CSS, démontrant des compétences en structuration et stylisation front-end.",
      technologies: ["HTML", "CSS", "Design"],
      image: "/assets/sapin-de-noel.png",
      liveUrl: "https://enismermer.github.io/Sapin_de_Noel/Sapin%20de%20Noel/index.html",
      githubUrl: "https://github.com/enismermer/sapin-de-noel"
    },
    {
      title: "Tap Taupe",
      description:
        "Un jeu interactif développé avec jQuery, où le joueur doit taper sur des taupes qui apparaissent de manière aléatoire pour accumuler des points.",
      technologies: ["jQuery", "JavaScript", "Front-End"],
      image: "/assets/tap-taupe.png",
      liveUrl: "https://enismermer.github.io/tap_taupe_jQuery/",
      githubUrl: "https://github.com/enismermer/tap_taupe_jQuery"
    },
    {
      title: "Electron Desktop - API Amiibo",
      description:
        "Une application desktop développée avec Electron pour consulter et afficher les données des figurines Amiibo via une API publique.",
      technologies: ["Electron.js", "JavaScript", "API", "Desktop"],
      image: "/assets/electron-api-desktop.png",
      liveUrl: "#",
      githubUrl: "https://github.com/enismermer/Electron_appDesktop_apiAmiibo"
    },
    {
      title: "Jukebox",
      description:
        "Une application web pour créer et gérer des playlists musicales avec un back-end Symfony et une interface Figma.",
      technologies: ["Symfony", "PHP", "Figma"],
      image: "/assets/jukebox.png",
      liveUrl: "#",
      githubUrl: "https://github.com/enismermer/Symfony-jukebox"
    },
    {
      title: "Bookbox",
      description:
        "Une application mobile et une API back-end pour gérer des livres avec QR code, développée avec Symfony et React Native.",
      technologies: ["Symfony", "PHP", "API", "React Native", "Postman", "Figma"],
      image: "/assets/bookbox.png",
      liveUrl: "#",
      githubUrl: "https://github.com/enismermer/React_Native_Bookbox"
    },
    {
      title: "API Météo",
      description:
        "Une application web réalisée avec Vue.js pour afficher les prévisions météo d’une ville en temps réel grâce à l’API OpenWeatherMap.",
      technologies: ["Vue.js", "API", "Front-End"],
      image: "/assets/api-meteo.png",
      liveUrl: "https://api-meteo-smoky.vercel.app/",
      githubUrl: "https://github.com/enismermer/APImeteo_Vue.js"
    },
    {
      title: "My-Personnality",
      description:
        "Une interface interactive en React.js inspirée de l'univers Mario, mettant en avant ma personnalité.",
      technologies: ["React.js", "JavaScript", "UX/UI", "Material-UI", "Animation", "Canva"],
      image: "/assets/my-personnality.png",
      liveUrl: "https://personnality.vercel.app/",
      githubUrl: "https://github.com/enismermer/personnality"
    },
    {
      title: "Naymo",
      description:
        "Naymo est une plateforme dédiée aux commerces de proximité, développée avec React.js et Firebase, alliant front-end et back-end.",
      technologies: ["React.js", "JavaScript", "TypeScript", "Firebase", "Tailwind"],
      image: "/assets/naymo.png",
      liveUrl: "https://naymo-mvp-v1.vercel.app/",
      githubUrl: "https://github.com/enismermer/naymo"
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">Projets réalisés</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice().reverse().map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 group hover:bg-card/70 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition
                        ${project.liveUrl === "#" ? "bg-gray-400 cursor-not-allowed" : "bg-primary text-white hover:bg-primary/80"}`}
                      onClick={(e) => {
                        if (project.liveUrl === "#") e.preventDefault()
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Démo
                    </a>
                    <a href={project.githubUrl} target="_blank" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-border text-foreground hover:bg-card/10 transition">
                      <Github className="w-4 h-4" />
                        Code
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
