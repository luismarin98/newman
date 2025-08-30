import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Clock, Users, Award, ChevronRight, Star, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function HomePage() {
  const featuredPrograms = [
    {
      id: "mba",
      title: "Maestría en Administración de Empresas - MBA",
      description:
        "Desarrolla habilidades directivas y estratégicas para liderar organizaciones en el entorno empresarial actual.",
      duration: "18 meses",
      credits: "60 créditos",
      modality: "Híbrida",
      status: "Convocatoria abierta",
      image: "/professional-business-meeting-boardroom.png",
    },
    {
      id: "educacion",
      title: "Maestría en Educación",
      description: "Transforma la educación con metodologías innovadoras y enfoques pedagógicos de vanguardia.",
      duration: "24 meses",
      credits: "48 créditos",
      modality: "En línea",
      status: "Convocatoria abierta",
      image: "/modern-classroom-technology-education.png",
    },
    {
      id: "salud",
      title: "Maestría en Gestión en Salud",
      description:
        "Especialízate en la administración y gestión de sistemas de salud con enfoque en calidad y eficiencia.",
      duration: "20 meses",
      credits: "54 créditos",
      modality: "Híbrida",
      status: "Próxima convocatoria",
      image: "/healthcare-management-hospital-administration.png",
    },
  ]

  const trustSignals = [
    {
      icon: Award,
      text: "Acreditación Internacional",
      description: "Reconocimiento por organismos educativos de prestigio",
    },
    { icon: Users, text: "95% de Empleabilidad", description: "Nuestros graduados encuentran mejores oportunidades" },
    { icon: Star, text: "4.8/5 Satisfacción", description: "Calificación promedio de nuestros estudiantes" },
    { icon: CheckCircle, text: "15+ Años de Experiencia", description: "Formando líderes en América Latina" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SpeedInsights />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 font-[family-name:var(--font-playfair)]">
            Impulsa tu Carrera con una
            <span className="text-primary"> Maestría de Prestigio</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
            Diseñadas para profesionales latinoamericanos que buscan excelencia académica, flexibilidad y resultados
            tangibles en su desarrollo profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Link href="#programas">Explorar Maestrías</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
              <Link href="/solicitar-informacion">Solicitar Información</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center">
                <signal.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{signal.text}</h3>
                <p className="text-sm text-muted-foreground">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section id="programas" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Maestrías Destacadas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Programas diseñados para profesionales que buscan transformar su carrera y generar impacto en sus
              organizaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
              <Card
                key={program.id}
                className="group hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-800"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant={program.status === "Convocatoria abierta" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {program.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-balance leading-tight">{program.title}</CardTitle>
                  <CardDescription className="text-pretty leading-relaxed">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span>{program.credits}</span>
                    </div>
                    <div className="col-span-2 flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>Modalidad {program.modality}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full group">
                    <Link href={`/maestria/${program.id}`}>
                      Ver Detalles
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            ¿Listo para Transformar tu Futuro Profesional?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Únete a miles de profesionales que han impulsado su carrera con nuestras maestrías. El momento de actuar es
            ahora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8">
              <Link href="/solicitar-informacion">Solicitar Información Gratuita</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/proceso-admision">Iniciar Proceso de Admisión</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
