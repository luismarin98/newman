import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, CheckCircle } from "lucide-react"

interface ProgramDetailTabsProps {
  program: any
}

export function ProgramDetailTabs({ program }: ProgramDetailTabsProps) {
  return (
    <Tabs defaultValue="descripcion" className="w-full">
      <TabsList className="grid w-full grid-cols-6 mb-8">
        <TabsTrigger value="descripcion">Descripción</TabsTrigger>
        <TabsTrigger value="malla">Malla curricular</TabsTrigger>
        <TabsTrigger value="docentes">Docentes</TabsTrigger>
        <TabsTrigger value="inversion">Inversión</TabsTrigger>
        <TabsTrigger value="admision">Admisión</TabsTrigger>
        <TabsTrigger value="oficialidad" className="text-primary">
          Oficialidad
        </TabsTrigger>
      </TabsList>

      <TabsContent value="descripcion" className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-6">{program.tabs.descripcion.title}</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">{program.tabs.descripcion.content}</p>

          {/* Credits breakdown table */}
          <div className="bg-muted/30 p-6 rounded-lg mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-semibold">TIPO</th>
                  <th className="text-left py-2 font-semibold">CRÉDITOS</th>
                </tr>
              </thead>
              <tbody>
                {program.tabs.descripcion.creditBreakdown.map((item: any, index: number) => (
                  <tr key={index} className="border-b">
                    <td className="py-2">{item.type}</td>
                    <td className="py-2">{item.credits}</td>
                  </tr>
                ))}
                <tr className="font-semibold">
                  <td className="py-2">Créditos Totales</td>
                  <td className="py-2">{program.tabs.descripcion.totalCredits}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Download curriculum link */}
          <div className="mb-8">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              DESCARGAR LA MALLA CURRICULAR ARCHIVO PDF
            </Button>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="malla" className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-6">{program.tabs.malla.title}</h3>
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Download className="h-4 w-4" />
            {program.tabs.malla.downloadLink}
          </Button>
        </div>
      </TabsContent>

      <TabsContent value="docentes" className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-6">{program.tabs.docentes.title}</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">{program.tabs.docentes.description}</p>

          <div className="space-y-6">
            {program.tabs.docentes.professors.map((professor: any, index: number) => (
              <div key={index} className="flex gap-6 p-6 border rounded-lg">
                <div className="w-20 h-20 bg-muted rounded-full flex-shrink-0"></div>
                <div>
                  <h5 className="text-lg font-semibold text-primary mb-2">{professor.name}</h5>
                  <p className="text-muted-foreground leading-relaxed">{professor.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="inversion" className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-6">{program.tabs.inversion.title}</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>{program.tabs.inversion.peru.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">{program.tabs.inversion.peru.reserve}</p>
                <p className="mb-4">{program.tabs.inversion.peru.total}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{program.tabs.inversion.ecuador.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">{program.tabs.inversion.ecuador.reserve}</p>
                <p className="mb-4">{program.tabs.inversion.ecuador.total}</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {program.tabs.inversion.paymentOptions.map((option: any, index: number) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{option.title}:</p>
                  <p className="text-muted-foreground">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="admision" className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-6">{program.tabs.admision.title}</h3>
          <p className="text-muted-foreground mb-4">{program.tabs.admision.requirements.title}</p>
          <p className="mb-6">{program.tabs.admision.requirements.degree}</p>

          <h4 className="font-semibold mb-4">Documentos requeridos:</h4>
          <ul className="space-y-2 mb-6">
            {program.tabs.admision.requirements.documents.map((doc: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>

      <TabsContent value="oficialidad" className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-6">{program.tabs.oficialidad.title}</h3>
          <h4 className="font-semibold mb-4">{program.tabs.oficialidad.sunedu.title}</h4>
          <p className="text-muted-foreground leading-relaxed">{program.tabs.oficialidad.sunedu.description}</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}
