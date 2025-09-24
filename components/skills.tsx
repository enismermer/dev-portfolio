import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const technicalSkills = [
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "PHP", category: "Backend" },
    { name: "Symfony", category: "Backend" },
    { name: "SQL", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "Firebase", category: "Backend" },
  ]

  const otherSkills = [
    { name: "Figma", category: "Design" },
    { name: "Canva", category: "Design" },
    { name: "Postman", category: "API" },
    { name: "App Diagram", category: "Planning" },
    { name: "DBDiagram", category: "Database" },
    { name: "Trello", category: "Project Management" },
    { name: "Kanban", category: "Project Management" },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      Frontend: "bg-green-500/20 text-green-600 border-green-500/30",
      Backend: "bg-red-500/20 text-red-600 border-red-500/30",
      Database: "bg-blue-500/20 text-blue-600 border-blue-500/30",
      Design: "bg-purple-500/20 text-purple-600 border-purple-500/30",
      API: "bg-orange-500/20 text-orange-600 border-orange-500/30",
      Planning: "bg-yellow-500/20 text-yellow-600 border-yellow-500/30",
      "Project Management": "bg-cyan-500/20 text-cyan-600 border-cyan-500/30",
    }
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground"
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">Compétences techniques</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Technologies principales</h3>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className={`px-4 py-2 text-sm font-medium ${getCategoryColor(skill.category)}`}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Outils & Workflow</h3>
              <div className="flex flex-wrap gap-3">
                {otherSkills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className={`px-4 py-2 text-sm font-medium ${getCategoryColor(skill.category)}`}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-lg">
              Toujours en apprentissage et à l’affût de nouvelles technologies pour rester à la pointe du développement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
