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
  {
    label: 'Contacto',
    href: '/contacto',
  },
];

// ============================================
// Estadísticas / KPIs
// ============================================

export const stats: Stat[] = [
  {
    id: 'years',
    value: '15+',
    label: 'Años de experiencia',
    icon: '📅',
  },
  {
    id: 'clients',
    value: '500+',
    label: 'Clientes satisfechos',
    icon: '🤝',
  },
  {
    id: 'success',
    value: '98%',
    label: 'Tasa de cumplimiento',
    icon: '✅',
  },
  {
    id: 'team',
    value: '20+',
    label: 'Profesionales certificados',
    icon: '👥',
  },
];

// ============================================
// Testimonios
// ============================================

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María González',
    company: 'Tech Solutions SA de CV',
    position: 'Directora General',
    content: 'Excelente servicio de asesoría fiscal. Nos han ayudado a optimizar nuestra carga tributaria de manera legal y transparente. Su equipo siempre está actualizado con los cambios del SAT.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Roberto Martínez',
    company: 'Comercializadora del Norte',
    position: 'Propietario',
    content: 'La constitución de mi empresa fue muy sencilla gracias a S I Castro. Me guiaron en cada paso y resolvieron todas mis dudas. Altamente recomendados.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Ana Sánchez',
    company: 'Restaurante La Tradición',
    position: 'Socia',
    content: 'Llevan nuestra contabilidad desde hace 5 años. Son muy profesionales y siempre entregan todo a tiempo. Nos dan tranquilidad en temas fiscales.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Carlos Hernández',
    company: 'Constructora Moderna',
    position: 'Director Financiero',
    content: 'La consultoría financiera que nos brindaron fue clave para reestructurar nuestro negocio. Sus proyecciones fueron muy acertadas y nos ayudaron a crecer.',
    rating: 5,
  },
];

// ============================================
// Preguntas Frecuentes (FAQ)
// ============================================

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: '¿Qué documentos necesito para empezar con su servicio de contabilidad?',
    answer: 'Necesitarás tu RFC, estados de cuenta bancarios del último mes, facturas de compras y ventas, y la información de tu empresa (razón social, domicilio fiscal). Nuestro equipo te guiará en el proceso de recopilación de documentos.',
    category: 'contabilidad',
  },
  {
    id: '2',
    question: '¿Cuánto tiempo toma constituir una empresa?',
    answer: 'El proceso completo de constitución toma entre 2 y 4 semanas, dependiendo de la complejidad y los trámites ante notario. Incluye la elaboración del acta constitutiva, obtención del RFC, alta en el IMSS y demás registros necesarios.',
    category: 'legal',
  },
  {
    id: '3',
    question: '¿Ofrecen asesoría para personas físicas o solo empresas?',
    answer: 'Atendemos tanto a personas físicas con actividad empresarial como a personas morales. Nuestros servicios están diseñados para adaptarse a las necesidades específicas de cada cliente.',
    category: 'servicios',
  },
  {
    id: '4',
    question: '¿Con qué frecuencia debo presentar declaraciones fiscales?',
    answer: 'Depende de tu régimen fiscal. Las personas morales generalmente presentan declaraciones mensuales de IVA e ISR, además de la anual. Las personas físicas pueden ser mensuales o bimestrales según su actividad. Nosotros nos encargamos de todos estos trámites.',
    category: 'fiscal',
  },
  {
    id: '5',
    question: '¿Qué incluye el servicio de nómina?',
    answer: 'Incluye el cálculo de sueldos, impuestos y prestaciones, emisión de recibos de nómina con CFDI, cálculo de cuotas obrero-patronales, presentación de declaraciones ante IMSS e INFONAVIT, y asesoría en temas laborales.',
    category: 'nomina',
  },
  {
    id: '6',
    question: '¿Cómo puedo reducir legalmente mi carga fiscal?',
    answer: 'A través de nuestro servicio de planeación fiscal analizamos tu situación y diseñamos estrategias legales como aprovechamiento de deducciones autorizadas, elección del régimen fiscal más conveniente, y uso de estímulos fiscales. Todo dentro del marco legal vigente.',
    category: 'fiscal',
  },
  {
    id: '7',
    question: '¿Qué pasa si el SAT me solicita información?',
    answer: 'Nuestro servicio de representación legal fiscal te respalda. Atendemos requerimientos, preparamos la documentación necesaria y te representamos ante las autoridades fiscales para resolver la situación de manera favorable.',
    category: 'legal',
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
  name: 'S I Castro Consultores',
  legalName: 'S I Castro Consultores S.C.',
  slogan: 'Tu socio estratégico en materia fiscal y contable',
  description: 'Despacho contable con más de 15 años de experiencia brindando servicios de asesoría fiscal, contabilidad, auditoría y consultoría financiera a empresas y personas físicas.',
  founded: 2008,
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