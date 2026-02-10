import type { CompanyInfo, NavigationItem, ServiceItem, ProjectItem } from '@/types';

export const COMPANY_INFO: CompanyInfo = {
  name: 'NOVA ASCENSORES E.I.R.L.',
  phone: '+51 999 999 999',
  email: 'contacto@novaascensores.com',
  address: 'Lima, Perú',
  whatsapp: '+51 999 999 999',
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#'
  }
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Quiénes Somos', href: '/quienes-somos' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Garantía y Seguridad', href: '/garantia' },
  { label: 'Contacto', href: '/contacto' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'fabricacion',
    title: 'Fabricación de Ascensores',
    description: 'Diseñamos y construimos ascensores eléctricos de pasajeros, camilleros, de carga y cabinas personalizadas según las necesidades específicas de cada proyecto.',
    features: [
      'Ascensores eléctricos de pasajeros',
      'Ascensores camilleros para hospitales',
      'Ascensores de carga',
      'Cabinas personalizadas',
      'Estructuras metálicas y componentes electromecánicos'
    ]
  },
  {
    id: 'instalacion',
    title: 'Instalación de Ascensores',
    description: 'Diseñamos e instalamos ascensores eléctricos, camilleros y de carga, adaptados a las necesidades del cliente y características del proyecto.',
    features: [
      'Estudios técnicos previos',
      'Diseño personalizado',
      'Instalación profesional',
      'Pruebas y certificación',
      'Capacitación al personal'
    ]
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento Preventivo y Correctivo',
    description: 'Planes de mantenimiento periódicos que aseguran la operatividad continua del ascensor, reducen riesgos y prolongan la vida útil del equipo.',
    features: [
      'Inspección mensual',
      'Mantenimiento preventivo',
      'Reparación correctiva',
      'Actualización de componentes',
      'Reportes técnicos detallados'
    ]
  },
  {
    id: 'modernizacion',
    title: 'Modernización y Reparación',
    description: 'Realizamos la reparación y modernización de ascensores para mejorar el rendimiento y la confiabilidad del equipo.',
    features: [
      'Cambio de paneles de control',
      'Variadores de frecuencia',
      'Actualización de motores',
      'Modernización de puertas',
      'Sistemas de seguridad'
    ]
  },
  {
    id: 'certificacion',
    title: 'Certificación y Pruebas Técnicas',
    description: 'Ejecutamos pruebas de funcionamiento, protocolos de seguridad y emisión de informes técnicos para asegurar operación óptima.',
    features: [
      'Pruebas de funcionamiento',
      'Protocolos de seguridad',
      'Informes técnicos',
      'Certificación oficial',
      'Asesoría técnica'
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'gore-junin',
    name: 'GORE Junín',
    category: 'equipo-completo',
    description: 'Suministro e instalación completa de sistema de ascensores',
    year: '2023',
    location: 'Junín, Perú'
  },
  {
    id: 'municipalidad-huancayo',
    name: 'Municipalidad de Huancayo',
    category: 'equipo-completo',
    description: 'Instalación de ascensores para edificio municipal',
    year: '2023',
    location: 'Huancayo, Perú'
  },
  {
    id: 'hospital-la-merced',
    name: 'Hospital La Merced',
    category: 'equipo-completo',
    description: 'Ascensores camilleros y de pasajeros',
    year: '2022',
    location: 'La Merced, Perú'
  },
  {
    id: 'uncp',
    name: 'UNCP',
    category: 'mantenimiento',
    description: 'Mantenimiento preventivo y correctivo',
    year: '2023',
    location: 'Huancayo, Perú'
  },
  {
    id: 'corte-junin',
    name: 'Corte de Junín',
    category: 'mantenimiento',
    description: 'Servicio de mantenimiento integral',
    year: '2023',
    location: 'Junín, Perú'
  },
  {
    id: 'corte-selva-central',
    name: 'Corte Selva Central',
    category: 'mantenimiento',
    description: 'Mantenimiento y reparación especializada',
    year: '2023',
    location: 'Selva Central, Perú'
  },
  {
    id: 'corte-huanuco',
    name: 'Corte Huánuco',
    category: 'mantenimiento',
    description: 'Servicio técnico y mantenimiento',
    year: '2023',
    location: 'Huánuco, Perú'
  },
  {
    id: 'legado-lima',
    name: 'Legado Lima',
    category: 'instalacion',
    description: 'Instalación de ascensores residenciales',
    year: '2023',
    location: 'Lima, Perú'
  },
  {
    id: 'emilima',
    name: 'EMILIMA',
    category: 'mantenimiento',
    description: 'Contrato de mantenimiento preventivo',
    year: '2023',
    location: 'Lima, Perú'
  },
  {
    id: 'unfv',
    name: 'UNFV',
    category: 'reparacion',
    description: 'Reparación y modernización de equipos',
    year: '2022',
    location: 'Lima, Perú'
  },
  {
    id: 'hospital-carrion',
    name: 'Hospital Carrión',
    category: 'mantenimiento',
    description: 'Mantenimiento de ascensores hospitalarios',
    year: '2023',
    location: 'Lima, Perú'
  },
  {
    id: 'hospital-iren',
    name: 'Hospital IREN',
    category: 'mantenimiento',
    description: 'Servicio técnico especializado',
    year: '2023',
    location: 'Lima, Perú'
  }
];

export const SEO_CONFIG = {
  siteName: 'NOVA ASCENSORES E.I.R.L.',
  siteUrl: 'https://www.novaascensores.com',
  defaultImage: '/og-image.jpg',
  keywords: [
    'ascensores perú',
    'fabricación de ascensores',
    'instalación de ascensores',
    'mantenimiento de ascensores',
    'ascensores eléctricos',
    'transporte vertical',
    'nova ascensores',
    'ascensores hospitalarios',
    'montacargas perú',
    'modernización de ascensores'
  ].join(', ')
};
