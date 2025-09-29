"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { format } from "date-fns"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        toast({ title: "Message envoyé!", description: "Merci pour votre message." })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error("Erreur lors de l'envoi")
      }
    } catch (error) {
      toast({ title: "Erreur", description: "Impossible d'envoyer le message." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">Me contacter</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Travaillons ensemble</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Je suis toujours intéressé par de nouvelles opportunités et des projets stimulants. Que vous ayez une question, un projet à discuter ou simplement envie de dire bonjour, n’hésitez pas à me contacter !
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">enismermer38@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <p className="text-muted-foreground">+33 6 83 36 70 82</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-chart-2/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-chart-2" />
                    </div>
                    <div>
                      <p className="font-medium">Localisation</p>
                      <p className="text-muted-foreground">Grenoble, France</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-input/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-input/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-input/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-input/50 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full cursor-pointer" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
        &copy; {format(new Date(), "yyyy")} Enis Mermer. Tous droits réservés.
      </footer>
    </section>
  )
}
