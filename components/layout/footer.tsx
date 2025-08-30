import { GraduationCap } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Newman</span>
            </div>
            <p className="text-sm text-muted-foreground">Formando líderes para el futuro de América Latina</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Programas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/maestria/mba" className="hover:text-primary">
                  MBA
                </Link>
              </li>
              <li>
                <Link href="/maestria/educacion" className="hover:text-primary">
                  Educación
                </Link>
              </li>
              <li>
                <Link href="/maestria/ingenieria-software" className="hover:text-primary">
                  Ingeniería de Software
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Admisión</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/proceso-admision" className="hover:text-primary">
                  Proceso
                </Link>
              </li>
              <li>
                <Link href="/becas" className="hover:text-primary">
                  Becas
                </Link>
              </li>
              <li>
                <Link href="/maestrias" className="hover:text-primary">
                  Programas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>PE: +51 01 6365888</li>
              <li>CO: +57 601 6365888</li>
              <li>info@prenewman.edu.pe</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Escuela de Posgrado Newman. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
