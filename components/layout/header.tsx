import { Button } from "@/components/ui/button"
import { GraduationCap, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/atoms/theme-toggle"

interface HeaderProps {
  showBackButton?: boolean
  backHref?: string
  backText?: string
}

export function Header({ showBackButton = false, backHref = "/", backText = "Volver" }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          {showBackButton && (
            <Button variant="ghost" size="sm" asChild>
              <Link href={backHref}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                {backText}
              </Link>
            </Button>
          )}
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Newman</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/maestrias" className="text-sm font-medium hover:text-primary transition-colors">
            Maestrías
          </Link>
          <Link href="/proceso-admision" className="text-sm font-medium hover:text-primary transition-colors">
            Admisión y becas
          </Link>
          <Link href="/becas" className="text-sm font-medium hover:text-primary transition-colors">
            Becas
          </Link>
          <Link href="/presencia-internacional" className="text-sm font-medium hover:text-primary transition-colors">
            Internacional
          </Link>
          <Link href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
            Contacto
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="/proceso-admision">Solicitar Información</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
