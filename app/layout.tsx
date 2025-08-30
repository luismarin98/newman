import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./client-layout"
import "./globals.css"

export const metadata: Metadata = {
  title: "Escuela de Posgrado Newman - Maestrías para Profesionales",
  description:
    "Impulsa tu carrera profesional con nuestras maestrías diseñadas para profesionales latinoamericanos. Educación de calidad, flexible y orientada a resultados.",
  authors: [{ name: "Luis Alberto Marin Munoz", url: "https://luis-marin.vercel.app" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
