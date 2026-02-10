# 🏢 NOVA ASCENSORES E.I.R.L. - Website Corporativa

Sitio web corporativo profesional para NOVA ASCENSORES E.I.R.L., empresa peruana especializada en fabricación, instalación, mantenimiento y reparación de ascensores y sistemas de transporte vertical.

## 🚀 Características Principales

### 💎 Diseño y UX
- **Diseño corporativo serio y profesional** enfocado en ingeniería y confianza
- **Identidad visual única** dentro del rubro de ascensores
- **Colores corporativos** respetados: brand-dark, brand-primary, brand-accent, brand-secondary, brand-highlight, brand-soft
- **Tipografía Inter** para máxima legibilidad y aspecto moderno
- **Animaciones sutiles** con Framer Motion (fade-in, translate leve, stagger suave)

### 📱 Responsive Design
- **Mobile-first approach**
- **Optimizado para todos los dispositivos**: mobile → tablet → desktop → large screens
- **Navegación adaptativa** con menú hamburguesa para móviles
- **WhatsApp flotante** accesible desde cualquier dispositivo

### 🔧 Stack Tecnológico
- **React 19** con TypeScript
- **Vite** para desarrollo rápido
- **Tailwind CSS v4** para estilos modernos
- **Framer Motion** para animaciones elegantes
- **React Router DOM** para navegación
- **Lucide React** para iconos
- **SEO Nativo** (sin Helmet) compatible con React 19

### 🎯 SEO Optimizado
- **Meta tags optimizados** para cada página
- **Estructura semántica correcta** (header, main, section, article, footer)
- **Un h1 por página** con jerarquía adecuada
- **Textos orientados a servicios reales**
- **SEO local** para Perú
- **Open Graph** y **Twitter Cards**

## 📄 Estructura del Sitio

### Páginas Principales
1. **Inicio** - Hero impactante con servicios destacados y CTA
2. **Quiénes Somos** - Misión, visión, valores y experiencia
3. **Servicios** - Detalle completo de 5 servicios principales
4. **Proyectos/Clientes** - Portafolio de trabajos realizados
5. **Garantía y Seguridad** - Compromiso de calidad y certificaciones
6. **Contacto** - Formulario interactivo y WhatsApp directo

### Componentes Reutilizables
- **Hero** - Secciones principales con gradientes elegantes
- **ServiceCard** - Tarjetas para servicios con hover effects
- **AnimatedSection** - Animaciones sutiles con Framer Motion
- **WhatsAppButton** - Botón flotante de contacto
- **SEOHead** - Componente para meta tags optimizados

## 🎨 Sistema de Diseño

### Colores Corporativos
```css
--color-brand-dark: #273A5A
--color-brand-primary: #4C77AD
--color-brand-accent: #4660AA
--color-brand-secondary: #5B398E
--color-brand-highlight: #D44883
--color-brand-soft: #CFEBFC
```

### Tipografía
- **Fuente principal**: Inter (system-ui fallback)
- **Jerarquía clara**: H1-H6 con pesos consistentes
- **Optimizada para legibilidad** en todos los dispositivos

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd nova-landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar producción
npm run preview
```

### Variables de Entorno
Crear archivo `.env.local`:
```env
VITE_WHATSAPP_NUMBER=51999999999
VITE_COMPANY_EMAIL=contacto@novaascensores.com
VITE_COMPANY_PHONE=51999999999
```

## 📁 Estructura de Archivos

```
src/
├── app/
│   ├── App.tsx              # App principal
│   ├── providers.tsx        # Context providers
│   └── router.tsx          # Configuración de rutas
├── components/
│   ├── layouts/            # Layout components
│   │   ├── AppLayout.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── seo/               # SEO components
│   │   └── SEOHead.tsx
│   ├── ui/                # UI components
│   │   ├── AnimatedSection.tsx
│   │   └── WhatsAppButton.tsx
│   ├── hero.tsx
│   └── servicesCard.tsx
├── constants/
│   └── company.ts         # Datos de la empresa
├── pages/                # Páginas del sitio
│   ├── home/
│   ├── quienes-somos/
│   ├── servicios/
│   ├── proyectos/
│   ├── garantia/
│   └── contacto/
├── styles/
│   └── global.css         # Estilos globales
├── types/
│   └── index.ts          # TypeScript types
└── main.tsx              # Entry point
```

## 🎯 Objetivos de Negocio

### Propósito Principal
- **Presentar servicios** y generar clientes
- **Facilitar contacto** y cotizaciones
- **Ofrecer soporte** y mantenimiento
- **Transmitir confianza** y experiencia

### Público Objetivo
- **Gerentes de instalaciones** de edificios corporativos
- **Administradores de hospitales** y clínicas
- **Responsables de mantenimiento** de condominios
- **Gerentes de proyectos** de construcción

## 🚀 Despliegue

### Build para Producción
```bash
npm run build
```

El proyecto genera archivos estáticos optimizados en la carpeta `dist/` listos para desplegar en cualquier servidor web estático.

### Optimizaciones Incluidas
- **Code splitting** automático
- **Tree shaking** de código no utilizado
- **Minificación** de CSS y JavaScript
- **Optimización de imágenes** (requiere configuración adicional)

## 📈 SEO y Marketing

### Palabras Clave Principales
- ascensores perú
- fabricación de ascensores
- instalación de ascensores
- mantenimiento de ascensores
- nova ascensores
- transporte vertical

### Meta Tags Optimizados
Cada página incluye:
- **Title** único y descriptivo
- **Description** con llamada a la acción
- **Keywords** relevantes
- **Open Graph** para redes sociales
- **Canonical URL** para evitar contenido duplicado

## 🔧 Mantenimiento

### Actualizaciones Recomendadas
- **Dependencias**: Revisar mensualmente
- **Contenido**: Actualizar proyectos y servicios trimestralmente
- **SEO**: Revisar métricas y ajustar según rendimiento
- **Imágenes**: Optimizar y añadir fotos reales de proyectos

### Monitoreo
- **Google Analytics** para tráfico
- **Google Search Console** para SEO
- **Core Web Vitals** para rendimiento
- **Formularios** para verificar funcionamiento

## 📞 Contacto de Soporte

Para consultas técnicas sobre el sitio web:
- **Email**: desarrollo@novaascensores.com
- **WhatsApp**: +51 999 999 999

---

**© 2026 NOVA ASCENSORES E.I.R.L.** - Todos los derechos reservados
*Desarrollado con ❤️ en Perú*
