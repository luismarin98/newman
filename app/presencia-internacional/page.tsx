import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/layout/header"

export default function PresenciaInternacionalPage() {
  const countries = [
    {
      name: "Perú",
      description:
        "Somos la institución educativa con reconocimiento oficial para el otorgamiento de maestrías a distancia del Perú. Estamos licenciados por la SUNEDU.",
      cities: ["Tacna (Perú)", "Lima (Perú)"],
    },
    {
      name: "Ecuador",
      description:
        "Nuestras maestrías de cuarto nivel son reconocidas por SENESCYT bajo el Convenio Andrés Bello y en correspondencia a la LOES de Ecuador.",
      cities: ["Guayaquil (Ecuador)", "Manta (Ecuador)"],
    },
    {
      name: "Bolivia",
      description:
        "Nuestras maestrías son reconocidas y oficiales en Bolivia gracias al Convenio Andrés Bello entre la Escuela de Posgrado Newman y la Universidad Autónoma Tomás Frías.",
      cities: ["Santa Cruz de la Sierra (Bolivia)"],
    },
  ]

  const partners = [
    { name: "UNIR", logo: "/unir-logo.png" },
    { name: "Cunimad", logo: "/cunimad-logo.png" },
    { name: "Newman", logo: "/newman-logo.png" },
    { name: "MIU", logo: "/miu-logo.png" },
    { name: "K-School", logo: "/k-school-logo.png" },
    { name: "Qualentum", logo: "/qualentum-logo.png" },
    { name: "UNIPRO", logo: "/unipro-logo.png" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header showBackButton={true} backText="Volver" />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Presencia internacional
          </h1>
        </div>
      </section>

      <div className="container mx-auto py-12 px-4">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground mb-6">
            La metodología de estudios online es un motor clave para la internacionalización, ya que permite a
            estudiantes de distintas partes del mundo acceder a programas académicos sin barreras geográficas.
          </p>
          <p className="text-lg text-muted-foreground">
            La Escuela de Posgrado Newman es una institución educativa peruana, con sedes físicas en Tacna y Lima.
            Actualmente, tenemos presencia en los mercados de Perú y Ecuador, principalmente. No obstante, nuestras
            maestrías son accesibles a personas de cualquier lugar del mundo que busquen recibir formación de maestrías
            online en español.
          </p>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 font-[family-name:var(--font-playfair)]">
            Newman en otros países
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map placeholder */}
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Mapa de presencia internacional"
                className="w-full h-[400px] object-contain"
              />
            </div>

            {/* Countries Information */}
            <div className="space-y-8">
              {countries.map((country, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-2 text-primary">{country.name}</h3>
                  <p className="text-muted-foreground mb-4">{country.description}</p>
                  <div className="space-y-2">
                    {country.cities.map((city, cityIndex) => (
                      <div key={cityIndex} className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span className="text-sm">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MIU Partnership */}
        <div className="mb-16">
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="MIU City University"
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <CardTitle className="text-2xl">Alianza con MIU City University</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                MIU City University Miami es una universidad estadounidense con sede en Miami - Florida que ofrece
                cursos universitarios oficiales de grado y posgrado en modalidad en línea y presencial. MIU busca
                satisfacer las necesidades de estudiantes, nacionales e internacionales, gracias a un enfoque didáctico
                basado en el desarrollo de conocimientos, habilidades y competencias interdisciplinarias.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* PROEDUCA Group */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-[family-name:var(--font-playfair)]">
            Pertenencia al Grupo PROEDUCA
          </h2>

          <div className="space-y-6 text-muted-foreground">
            <p>
              Desde 2019, la Escuela de Posgrado Newman forma parte del <strong>Grupo PROEDUCA</strong>, grupo
              hispanoamericano líder en educación en línea y un referente mundial en innovación educativa.
            </p>

            <p>
              PROEDUCA cuenta con más de 20 años de experiencia metodologías 100% en línea en sus aulas. Cuenta con
              miles de estudiantes en más de 90 países, especializándose en España, Ecuador, Colombia, México, Perú,
              Guatemala, Bolivia, Chile y Estados Unidos. Potencia el aprendizaje de forma flexible, cercana y rigurosa,
              dirigido siempre hacia el logro de unos resultados óptimos y el éxito de una experiencia educativa única.
              Ofrece a sus estudiantes de las herramientas y los conocimientos independientes para desarrollar su
              talento y frontear como profesionales.
            </p>

            <p>
              Ha implementado un modelo educativo global de éxito, inspirado en las bases de la calidad, la
              investigación y la innovación permanente de la enseñanza. En un grupo educativo que conecta el mundo
              empresarial con el de la enseñanza, capaz de conectar el mundo empresarial con el de la Universidad
              Internacional de La Rioja (UNIR).
            </p>

            <p>
              PROEDUCA ofrece más de 300 títulos de bachillerato entre las instituciones de educación superior que
              presenta, en hecho que avalan los rankings nacionales e internacionales más importantes del sector.
            </p>
          </div>
        </div>

        {/* Partner Institutions */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-8">Instituciones Partner</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <img
                key={index}
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>

          <div className="mt-8">
            <Button variant="outline" asChild>
              <Link href="/alianzas">IR A LA WEB DE PROEDUCA →</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
