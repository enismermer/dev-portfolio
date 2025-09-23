import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Passionate Developer</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a dedicated full-stack developer with a passion for creating innovative web applications that
                  solve real-world problems. With expertise in both frontend and backend technologies, I bring ideas to
                  life through clean, efficient code.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My journey in software development has led me to work with cutting-edge technologies and frameworks,
                  always staying current with industry trends and best practices. I believe in writing maintainable code
                  and creating exceptional user experiences.
                </p>
              </Card>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-twinkle"></div>
                <span className="text-muted-foreground">{">"} 3 years of development experience</span>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-2 h-2 bg-accent rounded-full animate-twinkle"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <span className="text-muted-foreground">{">"} 20+ projects completed</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-twinkle" style={{ animationDelay: "1s" }}></div>
                <span className="text-muted-foreground">{">"} Full-stack expertise</span>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-2 h-2 bg-accent rounded-full animate-twinkle"
                  style={{ animationDelay: "1.5s" }}
                ></div>
                <span className="text-muted-foreground">{">"} Modern development practices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
