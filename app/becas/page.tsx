import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink } from "lucide-react"
import { Header } from "@/components/layout/header"
import { ContactForm } from "@/components/forms/contact-form"

export default function BecasPage() {
  const scholarshipProviders = [
    {
      name: "OEA",
      fullName: "Organización de los Estados Americanos",
      description:
        "La Organización de los Estados Americanos (OEA) y la Escuela de Posgrado Newman se unen para impulsar el desarrollo profesional de estudiantes latinoamericanos mediante la asignación de becas parciales del 60% para acceder a los programas de Maestrías Online en diversas áreas del conocimiento de sus Maestrías Online.",
      logo: "/oea-logo.png",
      status: "CONVOCATORIA ABIERTA",
      discount: "60% de descuento",
    },
    {
      name: "OIJ",
      fullName: "Organización Iberoamericana de Juventud",
      description:
        "El Organismo Internacional de Juventud para Iberoamérica (OIJ) y la Escuela de Posgrado Newman tienen un año de duración y convocan 10 becas parciales del 60% de descuento en titulaciones oficiales de diferentes Maestrías Online.",
      logo: "/oij-logo.png",
      status: "CONVOCATORIA ABIERTA",
      discount: "60% de descuento",
    },
    {
      name: "Demanda Magisterial",
      fullName: "Demanda Magisterial",
      description:
        "La Demanda Magisterial y la Escuela de Posgrado Newman se unen para impultar el desarrollo profesional de estudiantes latinoamericanos mediante la asignación de becas parciales del 60% de descuento en titulaciones oficiales de diferentes Maestrías Online del Área de Educación.",
      logo: "/demanda-magisterial-logo.png",
      status: "CONVOCATORIA CERRADA",
      discount: "60% de descuento",
    },
    {
      name: "Colegio de Ingenieros del Perú",
      fullName: "Colegio de Ingenieros del Perú",
      description:
        "El Colegio de Ingenieros del Perú y la Escuela de Posgrado Newman tienen un año de duración y convocan 10 becas parciales del 60% de descuento en titulaciones oficiales de diferentes Maestrías Online del Área de Ingeniería.",
      logo: "/colegio-ingenieros-peru-logo.png",
      status: "CONVOCATORIA CERRADA",
      discount: "60% de descuento",
    },
    {
      name: "Junta de Decanos de los Colegios de Abogados del Perú",
      fullName: "Junta de Decanos de los Colegios de Abogados del Perú",
      description:
        "La Junta de Decanos de los Colegios de Abogados del Perú y la Escuela de Posgrado Newman se unen para impulsar el desarrollo profesional de estudiantes peruanos en el sector jurídico mediante la asignación de becas parciales del 60% de descuento en titulaciones oficiales de diferentes Maestrías Online.",
      logo: "/junta-decanos-abogados-peru-logo.png",
      status: "CONVOCATORIA CERRADA",
      discount: "60% de descuento",
    },
    {
      name: "Consejo Nacional de Decanos de los Colegios Profesionales",
      fullName: "Consejo Nacional de Decanos de los Colegios Profesionales",
      description:
        "El Consejo Nacional de Decanos de los Colegios Profesionales y la Escuela de Posgrado Newman se unen para impulsar el desarrollo de los profesionales colegiados mediante las Becas CONDECOP. El programa tiene un año de duración y convocan 10 becas parciales del 60% de descuento en titulaciones oficiales de diferentes Maestrías Online.",
      logo: "/condecop-logo.png",
      status: "CONVOCATORIA CERRADA",
      discount: "60% de descuento",
    },
    {
      name: "OEI",
      fullName: "Organización de Estados Iberoamericanos",
      description:
        "La Organización de Estados Iberoamericanos (OEI) y la Escuela de Posgrado Newman se unen para impulsar el desarrollo profesional de estudiantes iberoamericanos mediante las Becas OEI. El programa tiene un año de duración y convocan 10 becas parciales a partir del 60% de descuento en titulaciones oficiales de diferentes Maestrías Online.",
      logo: "/oei-logo.png",
      status: "CONVOCATORIA CERRADA",
      discount: "60% de descuento",
    },
    {
      name: "Santillana",
      fullName: "Santillana",
      description:
        "Santillana y la Escuela de Posgrado Newman se unen para impulsar el desarrollo de los profesionales del área de educación. El programa tiene un año de duración y convocan 10 becas parciales del 60% de descuento en titulaciones oficiales de diferentes Maestrías Online del área de educación.",
      logo: "/santillana-logo.png",
      status: "CONVOCATORIA CERRADA",
      discount: "60% de descuento",
    },
  ]

  const faqItems = [
    {
      question: "¿Cómo puedo solicitar una beca?",
      answer:
        "Para solicitar una beca, debes completar el formulario de solicitud de información en esta página y seleccionar la opción de beca que te interesa. Nuestro equipo se pondrá en contacto contigo para guiarte en el proceso.",
    },
    {
      question: "¿Necesito algún requisito especial para acceder a la beca?",
      answer:
        "Los requisitos varían según el tipo de beca. Generalmente se requiere cumplir con los requisitos de admisión del programa, demostrar necesidad económica o mérito académico, y en algunos casos, pertenecer a colegios profesionales específicos.",
    },
    {
      question: "¿Cuántas becas puedo solicitar?",
      answer:
        "Puedes aplicar a múltiples becas siempre que cumplas con los requisitos específicos de cada una. Sin embargo, solo podrás recibir una beca por programa de maestría.",
    },
    {
      question: "¿Cuándo es el descuento máximo al que puedo aplicar?",
      answer:
        "El descuento máximo disponible es del 60% del valor total del programa, dependiendo de la beca y tu perfil académico y profesional.",
    },
    {
      question: "¿Qué costos cubren las becas?",
      answer:
        "Las becas cubren un porcentaje del costo de matrícula del programa. Los materiales de estudio y certificaciones están incluidos en el programa.",
    },
    {
      question: "¿Qué pasos hay que seguir para solicitar una beca?",
      answer:
        "1) Completa el formulario de solicitud, 2) Envía la documentación requerida, 3) Participa en la entrevista de evaluación, 4) Espera la respuesta del comité de becas, 5) Si eres seleccionado, procede con la matrícula.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <Header showBackButton={true} backText="Volver" />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Becas y ayudas
          </h1>
        </div>
      </section>

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Becas</h2>
              <p className="text-muted-foreground mb-6">
                Los alumnos de la Escuela de Posgrado Newman cuentan con una enseñanza de calidad al alcance de todos.
                Por ello, promovemos acciones de colaboración con organismos de los más prestigiosos instituciones de
                formación educativa con el fin de ofrecer becas de ayudas para el estudio de nuestras maestrías.
              </p>

              <h3 className="text-xl font-semibold mb-4">Convocatoria de becas</h3>
            </div>

            {/* Scholarship Providers */}
            <div className="space-y-8">
              {scholarshipProviders.map((provider, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <img
                        src={provider.logo || "/placeholder.svg"}
                        alt={`${provider.name} logo`}
                        className="w-16 h-16 object-contain"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-lg">{provider.name}</CardTitle>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              provider.status === "CONVOCATORIA ABIERTA"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {provider.status}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-primary mb-2">{provider.fullName}</p>
                        <p className="text-sm text-muted-foreground">{provider.description}</p>
                        <p className="text-sm font-semibold text-accent mt-2">{provider.discount}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="text-primary bg-transparent">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      MÁS INFORMACIÓN
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Preguntas frecuentes sobre becas y ayudas</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {index + 1}. {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Information Request Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
