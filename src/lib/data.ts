import type { Testimonial, Stat, FAQItem, TeamMember, NavItem } from '@/types';

// ============================================
// Navegación Principal
// ============================================

export const navItems: NavItem[] = [
  {
    label: 'Inicio',
    href: '/',
  },
  {
    label: 'Servicios',
    href: '/servicios',
  },
  {
    label: 'Sobre Nosotros',
    href: '/sobre-nosotros',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];

// ============================================
// Estadísticas / KPIs
// ============================================

export const stats: Stat[] = [
  {
    id: 'years',
    value: '25+',
    label: 'Años de Experiencia',
    icon: '📅',
  },
  {
    id: 'clients',
    value: '500+',
    label: 'Clientes Satisfechos',
    icon: '🤝',
  },
  {
    id: 'fines',
    value: '0',
    label: 'Multas por Nuestro Error',
    icon: '✅',
  },
  {
    id: 'declarations',
    value: '98%',
    label: 'Declaraciones A Tiempo',
    icon: '📊',
  },
];

// ============================================
// Testimonios
// ============================================

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Roberto Méndez',
    company: 'RESICO',
    position: 'Arquitecto Independiente',
    content: 'Antes vivía estresado con las declaraciones. Desde que contraté a S & I Castro, duermo tranquilo sabiendo que todo está en orden. Y ni siquiera tuve que ir a una oficina, todo fue en línea.',
    rating: 5,
    location: 'CDMX',
  },
  {
    id: '2',
    name: 'María González',
    company: 'Actividad Empresarial',
    position: 'Consultora de Marketing',
    content: 'Me ayudaron a recuperar más de $45,000 en devoluciones que no sabía que podía reclamar. Su servicio se pagó solo en el primer mes. Trabajo con ellos desde Monterrey sin problema.',
    rating: 5,
    location: 'Nuevo León',
  },
  {
    id: '3',
    name: 'Carlos Ramírez',
    company: 'Persona Moral',
    position: 'Dueño de Ferretería',
    content: 'Tenemos 8 empleados y antes era un caos la nómina. Ahora todo está automatizado y sin errores. El servicio en línea es excelente, responden súper rápido.',
    rating: 5,
    location: 'Jalisco',
  },
];

// ============================================
// Preguntas Frecuentes (FAQ)
// ============================================

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: '¿Por qué debería contratar un contador en lugar de hacerlo yo mismo?',
    answer: 'Porque tu tiempo vale más que lo que inviertes en el servicio. Un error fiscal puede costarte multas de miles de pesos, sin contar el estrés y tiempo perdido. Además, un contador identifica deducciones y oportunidades de ahorro que difícilmente detectarías solo.',
    category: 'servicios',
  },
  {
    id: '2',
    question: '¿Qué incluye exactamente cada plan?',
    answer: 'Cada plan está diseñado para diferentes necesidades. El Plan Básico cubre lo esencial para cumplir, el Premium incluye nómina y planeación, y el Empresarial es para personas morales con mayor complejidad. Puedes ver la comparativa detallada en nuestra página de servicios.',
    category: 'servicios',
  },
  {
    id: '3',
    question: '¿Qué pasa si tengo declaraciones atrasadas?',
    answer: 'No hay problema. Ofrecemos servicios de regularización fiscal. Evaluamos tu situación sin costo y te presentamos un plan para ponerte al corriente con el SAT, minimizando multas y recargos.',
    category: 'fiscal',
  },
  {
    id: '4',
    question: '¿Cómo funciona el servicio 100% en línea?',
    answer: 'Muy simple: después de contratar tu plan, coordinamos una videollamada inicial para conocer tu situación. Te damos acceso a una carpeta compartida (Google Drive o Dropbox) donde subirás tus facturas y documentos. Nosotros nos encargamos de todo lo demás: contabilidad, declaraciones y trámites. Puedes contactarnos por WhatsApp, correo o videollamada cuando lo necesites. Todo el proceso es digital, seguro y desde la comodidad de tu casa u oficina, sin importar en qué ciudad te encuentres.',
    category: 'servicios',
  },
  {
    id: '5',
    question: '¿Puedo cancelar en cualquier momento?',
    answer: 'Sí. No hay contratos forzosos. Trabajamos mes a mes. Si decides cancelar, solo necesitamos un aviso con 30 días de anticipación para hacer la transición ordenadamente.',
    category: 'servicios',
  },
];

// ============================================
// Equipo
// ============================================

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'C.P. Salomon Castro Charco',
    position: 'Socio Fundador',
    bio: 'Contador Público con más de 20 años de experiencia en asesoría fiscal y contable. Especialista en planeación fiscal para empresas del sector comercial y de servicios.',
    image: '/images/team/salvador-castro.jpg',
    email: 'salomon@sicastro.com',
  },
  {
    id: '2',
    name: 'C.P. Israel Castro Urieta',
    position: 'Socio Fundador',
    bio: 'Contador Público con especialidad en tecnologías de la información.',
    image: '/images/team/maria-ruiz.jpg',
    email: 'israel@sicastro.com',
  },
  {
    id: '3',
    name: 'C.P. María del Rosario Mondragón Jaimes',
    position: 'Director de Consultoría Financiera',
    bio: 'Licenciado en Contaduría con especialidad en Finanzas. Experto en proyecciones financieras y análisis de viabilidad de proyectos.',
    image: '/images/team/roberto-mendoza.jpg',
  },
];

// ============================================
// Información de Contacto
// ============================================

export const contactInfo = {
  email: 'hola@sicastro.com',
  phone: '7676722455',
  whatsapp: '5544753602',
  address: {
    street: '15 de Mayo #9',
    colony: '',
    city: 'San Jerónimo',
    state: 'Michoacán',
    zipCode: '61993',
    country: 'México',
  },
  social: {
    facebook: 'https://facebook.com/sicastro',
    linkedin: 'https://linkedin.com/company/sicastro',
    twitter: 'https://twitter.com/sicastro',
  },
  hours: {
    weekdays: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
    saturday: 'Sábado: 9:00 AM - 2:00 PM',
    sunday: 'Domingo: Cerrado',
  },
};

// ============================================
// Información de la Empresa
// ============================================

export const companyInfo = {
  name: 'S & I Castro Consultores',
  legalName: 'S I Castro Consultores S.C.',
  slogan: 'Tu socio estratégico en materia fiscal y contable',
  description: 'Desde 1999, hemos sido el aliado contable de cientos de profesionistas y empresarios en México. Lo que comenzó como un pequeño despacho en Guerrero, hoy es S & I Castro Consultores: un equipo de 3 contadores públicos certificados comprometidos con tu tranquilidad fiscal, sin importar dónde te encuentres.',
  founded: 1999,
  rfc: 'SIC080101XXX',
};

// ============================================
// SEO por defecto
// ============================================

export const defaultSEO = {
  title: 'S I Castro Consultores - Despacho Contable en México',
  description: 'Servicios de asesoría fiscal, contabilidad, auditoría y consultoría financiera. Más de 15 años de experiencia ayudando a empresas en México.',
  image: '/images/og-image.jpg',
  type: 'website' as const,
};