import { CheckCircle } from "lucide-react"
import { Header } from "@/components/layout/header"
import { ContactForm } from "@/components/forms/contact-form"
import { ProgramCard } from "@/components/molecules/program-card"

export default function MaestriasPage() {
  const programsByCategory = {
    Educación: [
      {
        id: "didactica-ciencias",
        title: "Maestría en Didáctica de las Ciencias, Tecnología, Ingeniería y Matemáticas",
        description:
          "Desarrolla competencias pedagógicas avanzadas para la enseñanza de STEM con metodologías innovadoras.",
        duration: "1 año",
        modality: "Online",
        category: "Educación",
      },
      {
        id: "tecnologia-educativa",
        title: "Maestría en Tecnología Educativa",
        description: "Integra herramientas tecnológicas en procesos educativos para mejorar el aprendizaje.",
        duration: "1 año",
        modality: "Online",
        category: "Educación",
      },
      {
        id: "educacion-inclusiva",
        title: "Maestría en Educación Inclusiva e Intercultural",
        description: "Forma especialistas en atención a la diversidad y educación intercultural.",
        duration: "1 año",
        modality: "Online",
        category: "Educación",
      },
    ],
    Empresas: [
      {
        id: "mba",
        title: "Maestría en Administración de Empresas - MBA",
        description: "Desarrolla habilidades directivas y estratégicas para liderar organizaciones",
        duration: "1 año",
        modality: "Online",
        category: "Empresas",
      },
      {
        id: "negocios-internacionales",
        title: "Maestría en Negocios Internacionales",
        description: "Desarrolla estrategias para la expansión y gestión de negocios en mercados globales.",
        duration: "1 año",
        modality: "Online",
        category: "Empresas",
      },
      {
        id: "marketing-digital",
        title: "Maestría en Marketing Digital",
        description: "Domina las estrategias digitales para posicionar marcas en el entorno online.",
        duration: "1 año",
        modality: "Online",
        category: "Empresas",
      },
    ],
    "Ingeniería y Tecnología": [
      {
        id: "ingenieria-software",
        title: "Maestría en Ingeniería de Software y Sistemas Informáticos",
        description:
          "Conviértete en un desarrollador capaz de gestionar y desarrollar software funcional, seguro y de calidad.",
        duration: "1 año",
        modality: "Online",
        category: "Ingeniería y Tecnología",
      },
      {
        id: "ciberseguridad",
        title: "Maestría en Ciberseguridad",
        description: "Protege sistemas y datos con las últimas técnicas de seguridad informática.",
        duration: "1 año",
        modality: "Online",
        category: "Ingeniería y Tecnología",
      },
      {
        id: "big-data",
        title: "Maestría en Big Data",
        description: "Analiza grandes volúmenes de datos para generar insights estratégicos.",
        duration: "1 año",
        modality: "Online",
        category: "Ingeniería y Tecnología",
      },
    ],
    "Ciencias Sociales y Arte": [
      {
        id: "gerencia-social",
        title: "Maestría en Gerencia Social",
        description: "Gestiona proyectos sociales con impacto positivo en las comunidades.",
        duration: "1 año",
        modality: "Online",
        category: "Ciencias Sociales y Arte",
      },
    ],
    Derecho: [
      {
        id: "derechos-humanos",
        title: "Maestría en Derechos Humanos",
        description: "Defiende y promueve los derechos fundamentales en diversos contextos.",
        duration: "1 año",
        modality: "Online",
        category: "Derecho",
      },
    ],
  }

  const benefits = [
    "Metodología 100% online que respeta tu tiempo personal",
    "Especialistas durante el cuarto semestre",
    "Sesión al primer día",
    "Certificado de cuarto semestre",
    "Contigo las sesiones 24 horas al día en campus virtual",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header showBackButton={true} backText="Volver" />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)]">Maestrías</h1>
        </div>
      </section>

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Nuestras maestrías online</h2>
              <p className="text-muted-foreground mb-6">
                Impulsa tu carrera a distancia y emprende el camino al futuro profesional
              </p>
            </div>

            {/* Programs by Category */}
            <div className="space-y-12">
              {Object.entries(programsByCategory).map(([category, programs]) => (
                <div key={category}>
                  <h3 className="text-xl font-bold mb-6 text-primary">{category}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{programs.length} programas</p>

                  <div className="grid gap-6 md:grid-cols-2">
                    {programs.map((program) => (
                      <ProgramCard
                        key={program.id}
                        id={program.id}
                        title={program.title}
                        description={program.description}
                        duration={program.duration}
                        modality={program.modality}
                        category={program.category}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Why Study at Newman */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">
                ¿Por qué estudiar en EP Newman? ¿Qué me ofrece a diferencia de otras instituciones online?
              </h2>

              <div className="space-y-6 text-muted-foreground">
                <p>
                  <strong>La EP Newman</strong> se diferencia de otras instituciones educativas online, con metodología
                  100% en línea, personalizada y global, con un enfoque en la excelencia académica y la innovación
                  educativa.
                </p>

                <div>
                  <p className="font-semibold text-foreground mb-2">Nuestros componentes diferenciales son:</p>
                  <ul className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  <strong>Sesión al primer día:</strong> Desde el primer día del curso, los estudiantes pueden acceder a
                  todas las clases y materiales del programa, lo que les permite avanzar a su propio ritmo y aprovechar
                  al máximo su tiempo de estudio.
                </p>

                <p>
                  <strong>Contigo las sesiones 24 horas al día en campus virtual:</strong> Nuestro campus virtual está
                  disponible las 24 horas del día, los 7 días de la semana, lo que permite a los estudiantes acceder a
                  sus clases, materiales y recursos en cualquier momento que les resulte conveniente.
                </p>

                <p>
                  <strong>Contigo con sesiones 24 horas al día en campus virtual:</strong> Contamos con un equipo de
                  tutores y profesores altamente calificados que brindan apoyo académico y orientación personalizada a
                  los estudiantes a lo largo de todo el programa.
                </p>

                <p>
                  <strong>Contigo con sesiones 24 horas al día en campus virtual:</strong> Ofrecemos una amplia gama de
                  recursos digitales, incluyendo bibliotecas virtuales, bases de datos especializadas, herramientas de
                  investigación y plataformas de colaboración, para enriquecer la experiencia de aprendizaje de nuestros
                  estudiantes.
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  )
}
