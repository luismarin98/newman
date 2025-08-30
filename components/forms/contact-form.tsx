import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail } from "lucide-react"

export function ContactForm() {
  return (
    <div className="space-y-6">
      {/* Information Request Form */}
      <Card>
        <CardHeader>
          <CardTitle>Solicita información</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="area">Área de interés</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un área" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="educacion">Educación</SelectItem>
                <SelectItem value="empresas">Empresas</SelectItem>
                <SelectItem value="ingenieria">Ingeniería y Tecnología</SelectItem>
                <SelectItem value="ciencias-sociales">Ciencias Sociales y Arte</SelectItem>
                <SelectItem value="derecho">Derecho</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="nombres">Nombres</Label>
            <Input id="nombres" placeholder="Tus nombres" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="apellidos">Apellidos</Label>
            <Input id="apellidos" placeholder="Tus apellidos" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="tu@email.com" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="pais">País</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="País" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="colombia">Colombia</SelectItem>
                  <SelectItem value="peru">Perú</SelectItem>
                  <SelectItem value="mexico">México</SelectItem>
                  <SelectItem value="argentina">Argentina</SelectItem>
                  <SelectItem value="ecuador">Ecuador</SelectItem>
                  <SelectItem value="chile">Chile</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono</Label>
              <Input id="telefono" placeholder="Teléfono" />
            </div>
          </div>

          <div className="text-xs text-muted-foreground">He leído y acepto la política de privacidad</div>

          <Button className="w-full bg-accent hover:bg-accent/90">SOLICITAR INFORMACIÓN</Button>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>¿Tienes alguna duda?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <div>
              <p className="font-semibold">PE: +51 01 6365888</p>
              <p className="text-sm text-muted-foreground">CO: +57 601 6365888</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <p className="font-semibold">INFO@PRENEWMAN.EDU.PE</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
