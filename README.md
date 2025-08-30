# Escuela de Posgrado Newman - Sitio Web

Un sitio web moderno y responsive para la Escuela de Posgrado Newman, diseñado para profesionales latinoamericanos que buscan programas de maestría de alta calidad.

## 🚀 Características Principales

- **Diseño Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- **Modo Oscuro/Claro**: Soporte completo para temas claro y oscuro
- **Arquitectura Atomic Design**: Componentes organizados en átomos, moléculas y organismos
- **Navegación Intuitiva**: Estructura clara basada en investigación UX
- **Información Consolidada**: Páginas de detalle completas para cada programa
- **Formularios Integrados**: Sistema de contacto y solicitud de información
- **Identidad Visual Newman**: Colores y tipografía oficial de la institución

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Componentes UI**: shadcn/ui
- **Iconos**: Lucide React
- **Tema**: next-themes
- **Tipografía**: Inter & JetBrains Mono (Google Fonts)

## 📁 Estructura del Proyecto

\`\`\`
├── app/                          # Páginas de la aplicación (App Router)
│   ├── becas/                   # Página de becas y ayudas
│   ├── maestria/[id]/           # Páginas dinámicas de detalle de maestrías
│   ├── maestrias/               # Listado de programas de maestría
│   ├── presencia-internacional/ # Página de presencia internacional
│   ├── proceso-admision/        # Proceso de admisión
│   ├── globals.css             # Estilos globales y tokens de diseño
│   ├── layout.tsx              # Layout principal
│   └── page.tsx                # Página de inicio
├── components/                  # Componentes organizados por Atomic Design
│   ├── atoms/                  # Elementos básicos (botones, inputs)
│   ├── molecules/              # Combinaciones simples (formularios, tarjetas)
│   ├── organisms/              # Secciones complejas (headers, tabs)
│   ├── layout/                 # Componentes de layout (header, footer)
│   ├── providers/              # Providers de contexto (tema)
│   └── ui/                     # Componentes base de shadcn/ui
├── data/                       # Datos estáticos del proyecto
│   └── programs.ts             # Información de programas de maestría
└── public/                     # Archivos estáticos (imágenes, logos)
\`\`\`

## 🎨 Atomic Design

El proyecto sigue la metodología **Atomic Design** para una arquitectura de componentes escalable:

### Átomos (`components/atoms/`)
- Elementos básicos reutilizables
- Botones, inputs, selects, toggles

### Moléculas (`components/molecules/`)
- Combinaciones de átomos
- Campos de formulario, tarjetas de programa

### Organismos (`components/organisms/`)
- Secciones complejas de la interfaz
- Tabs de detalle de programas, formularios completos

## 🚀 Instalación y Configuración

1. **Clonar el repositorio**
\`\`\`bash
git clone [URL_DEL_REPOSITORIO]
cd newman-graduate-school
\`\`\`

2. **Instalar dependencias**
\`\`\`bash
npm install
# o
yarn install
# o
pnpm install
\`\`\`

3. **Ejecutar en desarrollo**
\`\`\`bash
npm run dev
# o
yarn dev
# o
pnpm dev
\`\`\`

4. **Abrir en el navegador**
\`\`\`
http://localhost:3000
\`\`\`

## 📜 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta el linter para verificar el código

## 🎯 Páginas Principales

### Página de Inicio (`/`)
- Hero section con llamada a la acción
- Tarjetas de programas destacados
- Estadísticas institucionales
- Testimonios de estudiantes

### Maestrías (`/maestrias`)
- Listado completo de programas organizados por categorías
- Filtros por área de estudio
- Información resumida con enlaces a detalle

### Detalle de Maestría (`/maestria/[id]`)
- Información completa organizada en pestañas:
  - **Descripción**: Plan de estudios y metodología
  - **Malla Curricular**: Asignaturas y créditos
  - **Docentes**: Perfiles de profesores
  - **Inversión**: Costos y formas de pago
  - **Admisión**: Requisitos y proceso
  - **Oficialidad**: Reconocimientos y homologaciones

### Becas y Ayudas (`/becas`)
- Información sobre becas disponibles
- Organizaciones aliadas (OEA, OIJ, etc.)
- Formulario de solicitud
- Preguntas frecuentes

### Presencia Internacional (`/presencia-internacional`)
- Mapa de países con presencia
- Alianzas estratégicas
- Reconocimientos internacionales

## 🎨 Sistema de Colores

El proyecto utiliza la paleta oficial de Newman:

\`\`\`css
/* Colores principales */
--newman-primary: #4338CA    /* Azul Newman */
--newman-secondary: #6366F1  /* Azul claro */
--newman-accent: #EC4899     /* Rosa accent */

/* Modo oscuro */
--newman-dark-bg: #0F172A    /* Fondo oscuro */
--newman-dark-surface: #1E293B /* Superficie oscura */
\`\`\`

## 🌙 Modo Oscuro

El sitio incluye soporte completo para modo oscuro:
- Toggle en el header para cambiar tema
- Persistencia de preferencia del usuario
- Transiciones suaves entre temas
- Colores optimizados para ambos modos

## 📱 Responsive Design

- **Mobile First**: Diseñado primero para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Componentes Adaptativos**: Todos los componentes se ajustan automáticamente

## 🔧 Personalización

### Añadir Nuevos Programas

1. Editar `data/programs.ts`
2. Añadir nueva entrada con toda la información requerida
3. Las páginas se generan automáticamente

### Modificar Colores

1. Editar `app/globals.css`
2. Actualizar las variables CSS custom
3. Los cambios se aplican automáticamente

### Añadir Nuevas Páginas

1. Crear carpeta en `app/`
2. Añadir `page.tsx`
3. Actualizar navegación en `components/layout/header.tsx`

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**Escuela de Posgrado Newman**
- Teléfono: +51 1015-8469 | +51 939-3010-458
- Email: info@epnewman.edu.pe
- Dirección: Av. Bolognesi 987, Tacna 23001, Perú

---

Desarrollado con ❤️ para la Escuela de Posgrado Newman
