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
      Frontend: "bg-primary/20 text-primary border-primary/30",
      Backend: "bg-accent/20 text-accent border-accent/30",
      Database: "bg-chart-2/20 text-chart-2 border-chart-2/30",
      Design: "bg-chart-3/20 text-chart-3 border-chart-3/30",
      API: "bg-chart-4/20 text-chart-4 border-chart-4/30",
      Planning: "bg-chart-5/20 text-chart-5 border-chart-5/30",
      "Project Management": "bg-primary/20 text-primary border-primary/30",
    }
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground"
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">Technical Skills</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Core Technologies</h3>
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
              <h3 className="text-2xl font-semibold mb-6 text-accent">Tools & Workflow</h3>
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
              Always learning and exploring new technologies to stay at the forefront of development
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
