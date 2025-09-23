import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Starfield } from "@/components/starfield"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <Starfield />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
