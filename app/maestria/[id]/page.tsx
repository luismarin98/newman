import { notFound } from "next/navigation"
import { programsData, type ProgramId } from "@/data/programs"
import { ProgramDetailTabs } from "@/components/organisms/program-detail-tabs"
import { ContactForm } from "@/components/forms/contact-form"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Globe, Award } from "lucide-react"

export default function ProgramDetailPage({ params }: { params: { id: string } }) {
  const program = programsData[params.id as ProgramId]

  if (!program) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-lg mb-2">Maestría en</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
              {program.title}
            </h1>
            <p className="text-xl mb-8 opacity-90">{program.description}</p>

            {/* Key Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
              <div>
                <p className="text-sm opacity-75">Inicio</p>
                <p className="font-semibold">{program.startDate}</p>
              </div>
              <div>
                <p className="text-sm opacity-75">Duración</p>
                <p className="font-semibold">{program.duration}</p>
              </div>
              <div>
                <p className="text-sm opacity-75">Créditos</p>
                <p className="font-semibold">{program.credits}</p>
              </div>
              <div>
                <p className="text-sm opacity-75">Requisito</p>
                <p className="font-semibold">{program.degree}</p>
              </div>
              <div>
                <p className="text-sm opacity-75">Modalidad</p>
                <p className="font-semibold">{program.modality}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ProgramDetailTabs program={program} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick actions */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-semibold">Convocatoria abierta</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Globe className="h-5 w-5" />
                  <span className="font-semibold">Consulta nuestros descuentos y becas</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Award className="h-5 w-5" />
                  <span className="font-semibold">Plazas limitadas</span>
                </div>
              </CardContent>
            </Card>

            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
