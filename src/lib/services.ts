import type { Service } from '@/types';

// ============================================
// Datos de Servicios
// ============================================

export const services: Service[] = [
  {
    id: 'asesoria-fiscal',
    title: 'Asesoría Fiscal',
    category: 'fiscal',
    shortDescription: 'Orientación especializada en cumplimiento de obligaciones fiscales y estrategias de optimización tributaria para personas físicas y morales.',
    fullDescription: 'Brindamos asesoría integral en materia fiscal, ayudando a nuestros clientes a comprender y cumplir con sus obligaciones tributarias de manera eficiente. Nuestro equipo de expertos se mantiene actualizado con las constantes modificaciones a las leyes fiscales mexicanas para ofrecerte las mejores soluciones.',
    benefits: [
      'Cumplimiento normativo actualizado',
      'Reducción de riesgos fiscales',
      'Optimización de carga tributaria',
      'Evita multas y sanciones del SAT',
      'Estrategias fiscales personalizadas',
      'Asesoría continua todo el año',
    ],
    process: [
      {
        step: 1,
        title: 'Diagnóstico inicial',
        description: 'Análisis de situación fiscal actual',
      },
      {
        step: 2,
        title: 'Identificación de áreas',
        description: 'Detectamos oportunidades y riesgos',
      },
      {
        step: 3,
        title: 'Plan de acción',
        description: 'Estrategia personalizada',
      },
      {
        step: 4,
        title: 'Implementación',
        description: 'Aplicación de soluciones',
      },
      {
        step: 5,
        title: 'Seguimiento',
        description: 'Monitoreo continuo y ajustes',
      },
    ],
    pricing: {
      type: 'monthly',
      from: 3500,
      description: 'Planes mensuales desde $3,500 MXN. Cotización personalizada según necesidades.',
    },
    icon: '📊',
    featured: true,
    relatedServices: ['planeacion-fiscal', 'representacion-legal-fiscal'],
  },
  {
    id: 'contabilidad-general',
    title: 'Contabilidad General',
    category: 'contable',
    shortDescription: 'Registro y control de operaciones contables con apego a Normas de Información Financiera mexicanas.',
    fullDescription: 'Llevamos la contabilidad completa de tu empresa con profesionalismo y precisión. Registramos todas las operaciones financieras, generamos estados financieros y te proporcionamos información oportuna para la toma de decisiones. Nuestro servicio incluye el uso de software contable actualizado y respaldo en la nube.',
    benefits: [
      'Información financiera confiable',
      'Estados financieros mensuales',
      'Reportes gerenciales personalizados',
      'Cumplimiento de NIF',
      'Respaldo digital en la nube',
      'Portal para consulta 24/7',
    ],
    process: [
      {
        step: 1,
        title: 'Recopilación',
        description: 'Recepción de documentación mensual',
      },
      {
        step: 2,
        title: 'Registro',
        description: 'Captura en sistema contable',
      },
      {
        step: 3,
        title: 'Conciliación',
        description: 'Verificación bancaria y fiscal',
      },
      {
        step: 4,
        title: 'Reportes',
        description: 'Generación de estados financieros',
      },
      {
        step: 5,
        title: 'Entrega',
        description: 'Presentación y análisis de resultados',
      },
    ],
    pricing: {
      type: 'monthly',
      from: 5000,
      description: 'Desde $5,000 MXN mensuales según volumen de operaciones.',
    },
    icon: '💼',
    featured: true,
    relatedServices: ['auditoria', 'asesoria-fiscal'],
  },
  {
    id: 'auditoria',
    title: 'Auditoría',
    category: 'contable',
    shortDescription: 'Revisión independiente de estados financieros y procesos contables para garantizar su confiabilidad y cumplimiento normativo.',
    fullDescription: 'Realizamos auditorías financieras, fiscales y operativas con los más altos estándares de calidad. Nuestro equipo de auditores certificados proporciona una opinión independiente sobre la razonabilidad de la información financiera y detecta áreas de mejora en los controles internos.',
    benefits: [
      'Dictamen de estados financieros',
      'Detección de irregularidades',
      'Mejora de controles internos',
      'Cumplimiento normativo',
      'Transparencia financiera',
      'Requisito para créditos bancarios',
    ],
    process: [
      {
        step: 1,
        title: 'Planeación',
        description: 'Definición de alcance y objetivos',
      },
      {
        step: 2,
        title: 'Análisis preliminar',
        description: 'Evaluación de controles',
      },
      {
        step: 3,
        title: 'Trabajo de campo',
        description: 'Revisión detallada',
      },
      {
        step: 4,
        title: 'Hallazgos',
        description: 'Identificación de observaciones',
      },
      {
        step: 5,
        title: 'Dictamen',
        description: 'Emisión de informe final',
      },
    ],
    pricing: {
      type: 'project',
      from: 35000,
      description: 'Cotización según alcance. Auditoría completa desde $35,000 MXN.',
    },
    icon: '🔍',
    relatedServices: ['contabilidad-general', 'consultoria-financiera'],
  },
  {
    id: 'consultoria-financiera',
    title: 'Consultoría Financiera',
    category: 'consultoria',
    shortDescription: 'Asesoría estratégica para optimizar recursos financieros, mejorar flujos de efectivo y alcanzar objetivos empresariales.',
    fullDescription: 'Te ayudamos a tomar mejores decisiones financieras mediante análisis profundo de tu situación económica. Desarrollamos estrategias para mejorar rentabilidad, optimizar capital de trabajo y planificar el crecimiento sostenible de tu empresa. Incluye proyecciones financieras y análisis de viabilidad.',
    benefits: [
      'Proyecciones financieras precisas',
      'Análisis de rentabilidad',
      'Optimización de capital de trabajo',
      'Estrategias de crecimiento',
      'Evaluación de proyectos de inversión',
      'Reestructuración financiera',
    ],
    process: [
      {
        step: 1,
        title: 'Evaluación',
        description: 'Análisis de situación actual',
      },
      {
        step: 2,
        title: 'Diagnóstico',
        description: 'Identificación de áreas críticas',
      },
      {
        step: 3,
        title: 'Estrategia',
        description: 'Desarrollo de plan financiero',
      },
      {
        step: 4,
        title: 'Modelado',
        description: 'Proyecciones y escenarios',
      },
      {
        step: 5,
        title: 'Implementación',
        description: 'Acompañamiento en ejecución',
      },
    ],
    pricing: {
      type: 'project',
      from: 15000,
      description: 'Proyectos desde $15,000 MXN. Consultoría por hora: $1,800 MXN.',
    },
    icon: '📈',
    featured: true,
    relatedServices: ['auditoria', 'planeacion-fiscal'],
  },
  {
    id: 'nomina-imss',
    title: 'Nómina e IMSS',
    category: 'nomina',
    shortDescription: 'Administración integral de nómina, cálculo de prestaciones y cumplimiento de obligaciones patronales ante IMSS e INFONAVIT.',
    fullDescription: 'Nos encargamos de todos los aspectos relacionados con la administración de personal: desde el cálculo de nómina hasta la gestión de altas, bajas y modificaciones ante el IMSS. Garantizamos el cumplimiento de todas las obligaciones laborales y de seguridad social, evitando sanciones y multas.',
    benefits: [
      'Cálculo preciso de nómina',
      'Cumplimiento laboral y de seguridad social',
      'Gestión de IMSS e INFONAVIT',
      'Timbrado de recibos (CFDI)',
      'Cálculo de finiquitos y liquidaciones',
      'Asesoría en relaciones laborales',
    ],
    process: [
      {
        step: 1,
        title: 'Captura',
        description: 'Registro de incidencias',
      },
      {
        step: 2,
        title: 'Cálculo',
        description: 'Procesamiento de nómina',
      },
      {
        step: 3,
        title: 'Timbrado',
        description: 'Emisión de CFDI',
      },
      {
        step: 4,
        title: 'Dispersión',
        description: 'Coordinación de pagos',
      },
      {
        step: 5,
        title: 'Declaraciones',
        description: 'Presentación ante IMSS/INFONAVIT',
      },
    ],
    pricing: {
      type: 'per-unit',
      from: 150,
      description: '$150 MXN por empleado al mes. Mínimo 10 empleados.',
    },
    icon: '👥',
    featured: true,
    relatedServices: ['asesoria-fiscal', 'constitucion-empresas'],
  },
  {
    id: 'planeacion-fiscal',
    title: 'Planeación Fiscal',
    category: 'fiscal',
    shortDescription: 'Diseño de estrategias legales para optimizar la carga tributaria y maximizar beneficios fiscales.',
    fullDescription: 'Desarrollamos estrategias fiscales a medida para reducir legalmente la carga impositiva de personas físicas y morales. Aprovechamos todos los beneficios, deducciones y estímulos fiscales disponibles, siempre dentro del marco legal vigente. Ideal para empresarios y profesionistas que buscan eficiencia fiscal.',
    benefits: [
      'Ahorro fiscal significativo',
      'Aprovechamiento de estímulos fiscales',
      'Estructura corporativa óptima',
      'Estrategias de diferimiento',
      'Análisis de deducciones',
      'Planeación patrimonial',
    ],
    process: [
      {
        step: 1,
        title: 'Análisis',
        description: 'Revisión de situación fiscal actual',
      },
      {
        step: 2,
        title: 'Oportunidades',
        description: 'Identificación de áreas de mejora',
      },
      {
        step: 3,
        title: 'Diseño',
        description: 'Creación de estrategia fiscal',
      },
      {
        step: 4,
        title: 'Simulación',
        description: 'Proyección de ahorros',
      },
      {
        step: 5,
        title: 'Ejecución',
        description: 'Implementación de plan',
      },
    ],
    pricing: {
      type: 'project',
      from: 12000,
      description: 'Desde $12,000 MXN. Incluye estudio completo y plan de acción.',
    },
    icon: '🎯',
    relatedServices: ['asesoria-fiscal', 'consultoria-financiera'],
  },
  {
    id: 'constitucion-empresas',
    title: 'Constitución de Empresas',
    category: 'consultoria',
    shortDescription: 'Asesoría completa para la creación legal de sociedades mercantiles y su registro ante autoridades correspondientes.',
    fullDescription: 'Te acompañamos en todo el proceso de constitución de tu empresa, desde la elección del régimen fiscal más conveniente hasta la obtención de permisos y registros. Tramitamos el acta constitutiva ante notario, RFC, alta en el IMSS y demás requisitos para que puedas iniciar operaciones legalmente.',
    benefits: [
      'Asesoría en tipo de sociedad ideal',
      'Trámite completo ante notario',
      'Obtención de RFC y e.firma',
      'Alta patronal IMSS',
      'Registro en SIEM',
      'Kit empresarial completo',
    ],
    process: [
      {
        step: 1,
        title: 'Consultoría',
        description: 'Definición de estructura',
      },
      {
        step: 2,
        title: 'Documentación',
        description: 'Preparación de papelería',
      },
      {
        step: 3,
        title: 'Constitución',
        description: 'Acta ante notario',
      },
      {
        step: 4,
        title: 'Trámites fiscales',
        description: 'Alta en SAT',
      },
      {
        step: 5,
        title: 'Registros',
        description: 'IMSS y otras autoridades',
      },
    ],
    pricing: {
      type: 'project',
      from: 18000,
      description: 'Paquete completo desde $18,000 MXN (más gastos notariales).',
    },
    icon: '🏢',
    relatedServices: ['asesoria-fiscal', 'nomina-imss'],
  },
  {
    id: 'representacion-legal-fiscal',
    title: 'Representación Legal Fiscal',
    category: 'fiscal',
    shortDescription: 'Defensa y representación ante autoridades fiscales en auditorías, revisiones y procedimientos administrativos.',
    fullDescription: 'Te representamos profesionalmente ante el SAT y otras autoridades fiscales. Atendemos requerimientos, presentamos aclaraciones, defensas y recursos de revocación. Nuestro equipo de especialistas fiscales protege tus intereses y busca las mejores soluciones ante cualquier contingencia fiscal.',
    benefits: [
      'Atención de auditorías SAT',
      'Respuesta a requerimientos',
      'Recursos de revocación',
      'Reducción de multas y recargos',
      'Convenios de pago',
      'Defensa profesional',
    ],
    process: [
      {
        step: 1,
        title: 'Análisis',
        description: 'Revisión de situación legal',
      },
      {
        step: 2,
        title: 'Estrategia',
        description: 'Definición de defensa',
      },
      {
        step: 3,
        title: 'Documentación',
        description: 'Integración de expediente',
      },
      {
        step: 4,
        title: 'Gestión',
        description: 'Trámites ante autoridades',
      },
      {
        step: 5,
        title: 'Seguimiento',
        description: 'Hasta resolución final',
      },
    ],
    pricing: {
      type: 'project',
      from: 8000,
      description: 'Desde $8,000 MXN según complejidad del caso.',
    },
    icon: '⚖️',
    relatedServices: ['asesoria-fiscal', 'planeacion-fiscal'],
  },
];

// ============================================
// Helpers
// ============================================

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}

export function getFeaturedServices(): Service[] {
  return services.filter(service => service.featured);
}

export function getServicesByCategory(category: Service['category']): Service[] {
  return services.filter(service => service.category === category);
}

export function getRelatedServices(serviceId: string): Service[] {
  const service = getServiceById(serviceId);
  if (!service || !service.relatedServices) return [];
  
  return service.relatedServices
    .map(id => getServiceById(id))
    .filter((s): s is Service => s !== undefined);
}