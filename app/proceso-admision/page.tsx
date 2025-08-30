"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { GraduationCap, ChevronLeft, ChevronRight, CheckCircle, User, FileText } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/layout/header"

const steps = [
  { id: 1, title: "Información Personal", icon: User, description: "Datos básicos de contacto" },
  { id: 2, title: "Información Académica", icon: GraduationCap, description: "Formación y experiencia" },
  { id: 3, title: "Programa de Interés", icon: FileText, description: "Selección de maestría" },
  { id: 4, title: "Confirmación", icon: CheckCircle, description: "Revisión y envío" },
]

export default function AdmissionProcessPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",

    // Step 2: Academic Information
    degree: "",
    university: "",
    graduationYear: "",
    workExperience: "",
    currentPosition: "",
    company: "",

    // Step 3: Program Interest
    program: "",
    modality: "",
    startDate: "",
    motivation: "",

    // Terms
    acceptTerms: false,
    acceptMarketing: false,
  })

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    alert("¡Solicitud enviada exitosamente! Te contactaremos pronto.")
  }

  const progress = (currentStep / steps.length) * 100

  const StepIcon = steps[currentStep - 1].icon
  const StepTitle = steps[currentStep - 1].title
  const StepDescription = steps[currentStep - 1].description

  return (
    <div className="min-h-screen bg-background">
      <Header showBackButton={true} backHref="/" backText="Volver al Inicio" />

      <div className="container mx-auto py-12 px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            Proceso de Admisión
          </h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Completa tu solicitud en simples pasos. Te acompañamos en todo el proceso.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium">
              Paso {currentStep} de {steps.length}
            </span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% completado</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Steps Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex flex-col items-center p-4 rounded-lg border transition-all ${
                step.id === currentStep
                  ? "border-primary bg-primary/5"
                  : step.id < currentStep
                    ? "border-primary bg-primary/10"
                    : "border-gray-200 dark:border-gray-800"
              }`}
            >
              <step.icon
                className={`h-8 w-8 mb-2 ${step.id <= currentStep ? "text-primary" : "text-muted-foreground"}`}
              />
              <h3 className="font-semibold text-sm text-center">{step.title}</h3>
              <p className="text-xs text-muted-foreground text-center mt-1">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Form Content */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <StepIcon className="h-5 w-5 text-primary" />
              {StepTitle}
            </CardTitle>
            <CardDescription>{StepDescription}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombres *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    placeholder="Ingresa tus nombres"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellidos *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    placeholder="Ingresa tus apellidos"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    placeholder="+57 300 123 4567"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">País *</Label>
                  <Select value={formData.country} onValueChange={(value) => updateFormData("country", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu país" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="colombia">Colombia</SelectItem>
                      <SelectItem value="mexico">México</SelectItem>
                      <SelectItem value="argentina">Argentina</SelectItem>
                      <SelectItem value="chile">Chile</SelectItem>
                      <SelectItem value="peru">Perú</SelectItem>
                      <SelectItem value="ecuador">Ecuador</SelectItem>
                      <SelectItem value="venezuela">Venezuela</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Ciudad *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => updateFormData("city", e.target.value)}
                    placeholder="Tu ciudad de residencia"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Academic Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="degree">Título Universitario *</Label>
                    <Input
                      id="degree"
                      value={formData.degree}
                      onChange={(e) => updateFormData("degree", e.target.value)}
                      placeholder="Ej: Ingeniería Industrial"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="university">Universidad *</Label>
                    <Input
                      id="university"
                      value={formData.university}
                      onChange={(e) => updateFormData("university", e.target.value)}
                      placeholder="Nombre de tu universidad"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="graduationYear">Año de Graduación *</Label>
                    <Select
                      value={formData.graduationYear}
                      onValueChange={(value) => updateFormData("graduationYear", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el año" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 30 }, (_, i) => 2024 - i).map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workExperience">Años de Experiencia Laboral *</Label>
                    <Select
                      value={formData.workExperience}
                      onValueChange={(value) => updateFormData("workExperience", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu experiencia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 años</SelectItem>
                        <SelectItem value="3-5">3-5 años</SelectItem>
                        <SelectItem value="6-10">6-10 años</SelectItem>
                        <SelectItem value="11-15">11-15 años</SelectItem>
                        <SelectItem value="15+">Más de 15 años</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentPosition">Cargo Actual</Label>
                    <Input
                      id="currentPosition"
                      value={formData.currentPosition}
                      onChange={(e) => updateFormData("currentPosition", e.target.value)}
                      placeholder="Tu posición actual"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => updateFormData("company", e.target.value)}
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Program Interest */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="program">Programa de Interés *</Label>
                    <Select value={formData.program} onValueChange={(value) => updateFormData("program", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una maestría" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mba">MBA - Maestría en Administración de Empresas</SelectItem>
                        <SelectItem value="educacion">Maestría en Educación</SelectItem>
                        <SelectItem value="salud">Maestría en Gestión en Salud</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="modality">Modalidad Preferida *</Label>
                    <Select value={formData.modality} onValueChange={(value) => updateFormData("modality", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona modalidad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="presencial">Presencial</SelectItem>
                        <SelectItem value="virtual">Virtual</SelectItem>
                        <SelectItem value="hibrida">Híbrida</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="startDate">Fecha de Inicio Preferida *</Label>
                    <Select value={formData.startDate} onValueChange={(value) => updateFormData("startDate", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="¿Cuándo te gustaría iniciar?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="febrero-2025">Febrero 2025</SelectItem>
                        <SelectItem value="marzo-2025">Marzo 2025</SelectItem>
                        <SelectItem value="abril-2025">Abril 2025</SelectItem>
                        <SelectItem value="mayo-2025">Mayo 2025</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="motivation">¿Por qué quieres estudiar esta maestría? *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => updateFormData("motivation", e.target.value)}
                    placeholder="Cuéntanos tus motivaciones y objetivos profesionales..."
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Resumen de tu Solicitud</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p>
                        <strong>Nombre:</strong> {formData.firstName} {formData.lastName}
                      </p>
                      <p>
                        <strong>Email:</strong> {formData.email}
                      </p>
                      <p>
                        <strong>Teléfono:</strong> {formData.phone}
                      </p>
                      <p>
                        <strong>País:</strong> {formData.country}
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Título:</strong> {formData.degree}
                      </p>
                      <p>
                        <strong>Experiencia:</strong> {formData.workExperience}
                      </p>
                      <p>
                        <strong>Programa:</strong> {formData.program}
                      </p>
                      <p>
                        <strong>Modalidad:</strong> {formData.modality}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="acceptTerms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => updateFormData("acceptTerms", checked as boolean)}
                    />
                    <Label htmlFor="acceptTerms" className="text-sm">
                      Acepto los{" "}
                      <Link href="/terminos" className="text-primary hover:underline">
                        términos y condiciones
                      </Link>{" "}
                      y la{" "}
                      <Link href="/privacidad" className="text-primary hover:underline">
                        política de privacidad
                      </Link>{" "}
                      *
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="acceptMarketing"
                      checked={formData.acceptMarketing}
                      onCheckedChange={(checked) => updateFormData("acceptMarketing", checked as boolean)}
                    />
                    <Label htmlFor="acceptMarketing" className="text-sm">
                      Acepto recibir información sobre programas y eventos de Newman
                    </Label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2 bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
                Anterior
              </Button>

              {currentStep < steps.length ? (
                <Button onClick={nextStep} className="flex items-center gap-2">
                  Siguiente
                  <ChevronRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.acceptTerms}
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                >
                  <CheckCircle className="h-4 w-4" />
                  Enviar Solicitud
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-2">¿Necesitas Ayuda?</h3>
              <p className="text-muted-foreground mb-4">
                Nuestro equipo de admisiones está aquí para apoyarte en todo el proceso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <Link href="mailto:admisiones@newman.edu">Escribir Email</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="tel:+15551234567">Llamar: +1 (555) 123-4567</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
