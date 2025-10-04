# S I Castro Consultores - Sitio Web Corporativo

Sitio web profesional para despacho contable mexicano, construido con Astro 5.x, Tailwind CSS y WordPress (WPGraphQL) para el blog.

---

## 🚀 Inicio Rápido

```bash
# Instalar dependencias (una vez configurado)
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

---

## 📋 Estado del Proyecto

**Fase Actual:** Planificación y Arquitectura ✅

### Progreso
- [x] Instalación base de Astro
- [x] Diseño de arquitectura
- [x] Definición de contenidos y servicios
- [x] Guía de configuración WordPress
- [ ] Configuración de Tailwind CSS
- [ ] Implementación de componentes
- [ ] Desarrollo de páginas
- [ ] Integración con WordPress
- [ ] Testing y optimización
- [ ] Despliegue

---

## 📚 Documentación

### Documentos Principales

1. **[ARQUITECTURA.md](./ARQUITECTURA.md)**
   - Stack tecnológico completo
   - Sistema de diseño (colores, tipografía)
   - Estructura de carpetas y componentes
   - Arquitectura de páginas
   - Integración con WordPress/GraphQL
   - Configuración de Tailwind
   - Optimizaciones y mejores prácticas

2. **[SERVICIOS.md](./SERVICIOS.md)**
   - Catálogo completo de 8 servicios
   - Descripciones, beneficios y procesos
   - Estructura de datos TypeScript
   - Categorización de servicios
   - Precios referenciales

3. **[WORDPRESS_SETUP.md](./WORDPRESS_SETUP.md)**
   - Guía paso a paso de instalación WordPress
   - Configuración de WPGraphQL
   - Queries GraphQL de ejemplo
   - Solución de problemas comunes
   - Checklist de configuración

---

## 🎨 Identidad Visual

### Paleta de Colores

```css
/* Primarios */
--indigo-dye: #004878        /* Color principal */
--light-sky-blue: #8fc2e9    /* Color secundario */

/* Acentos */
--aquamarine: #b2ffd6        /* Éxito/positivo */
--african-violet: #aa78a6    /* Destacados */

/* Neutros */
--raisin-black: #2e282a      /* Texto principal */
--background: #f6f7fb        /* Fondo */
```

### Tipografía

- **Encabezados:** Libre Caslon Display (Google Fonts)
- **Cuerpo:** Quicksand (Google Fonts)

---

## 🗂️ Estructura del Proyecto

```
sicastro/
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── layouts/         # Layouts de página
│   ├── pages/           # Rutas del sitio
│   ├── lib/             # Lógica de negocio
│   ├── types/           # Tipos TypeScript
│   └── styles/          # Estilos globales
├── public/              # Archivos estáticos
└── [archivos config]    # Configuración
```

---

## 📄 Páginas del Sitio

### Páginas Principales
- `/` - Home (Hero, servicios, stats, testimonios, FAQ, newsletter)
- `/servicios` - Listado de servicios
- `/servicio/[id]` - Detalle de servicio
- `/sobre-nosotros` - Información corporativa y equipo
- `/blog` - Listado de posts (desde WordPress)
- `/blog/[slug]` - Post individual (desde WordPress)
- `/contacto` - Formulario de contacto
- `/newsletter` - Suscripción a newsletter

### Páginas Legales
- `/informacion-legal` - Términos y condiciones
- `/aviso-privacidad` - Política de privacidad (LFPDPPP)

---

## 🔌 Integración WordPress

El blog consume contenido desde WordPress usando WPGraphQL.

**Endpoint:** `https://blog.sicastro.com/graphql`

### Variables de Entorno

Crear archivo `.env` en la raíz:

```env
WORDPRESS_GRAPHQL_URL=https://blog.sicastro.com/graphql
WORDPRESS_SITE_URL=https://blog.sicastro.com
SITE_URL=http://localhost:4321
CONTACT_EMAIL=contacto@sicastro.com
```

Ver [WORDPRESS_SETUP.md](./WORDPRESS_SETUP.md) para guía completa de configuración.

---

## 🛠️ Stack Tecnológico

### Core
- **Framework:** Astro 5.x
- **Estilos:** Tailwind CSS 3.x
- **Lenguaje:** TypeScript

### Integraciones
- **@astrojs/tailwind** - Integración oficial de Tailwind
- **graphql-request** - Cliente GraphQL para WordPress
- **@tailwindcss/typography** - Estilos para contenido de blog
- **@tailwindcss/forms** - Estilos para formularios

### CMS
- **WordPress** con plugin **WPGraphQL**

---

## 📱 Características

### Diseño
✅ Responsive y mobile-first  
✅ Animaciones CSS suaves  
✅ Sistema de diseño consistente  
✅ Accesibilidad (WCAG AA)  

### Performance
✅ Static Site Generation (SSG)  
✅ Optimización automática de imágenes  
✅ Code splitting  
✅ CSS purging  

### SEO
✅ Meta tags optimizados  
✅ Open Graph y Twitter Cards  
✅ Sitemap automático  
✅ Schema.org markup  

### Contenido
✅ 8 servicios especializados  
✅ Blog dinámico desde WordPress  
✅ Formularios de contacto y newsletter  
✅ FAQ interactivo  
✅ Testimoniales de clientes  

---

## 🎯 Servicios Destacados

1. **Asesoría Fiscal** - Orientación especializada en obligaciones fiscales
2. **Contabilidad General** - Registro y control contable profesional
3. **Auditoría** - Revisión independiente de estados financieros
4. **Consultoría Financiera** - Estrategia financiera empresarial
5. **Nómina e IMSS** - Administración integral de personal
6. **Planeación Fiscal** - Optimización legal de carga tributaria
7. **Constitución de Empresas** - Creación legal de sociedades
8. **Representación Legal Fiscal** - Defensa ante autoridades fiscales

Ver detalles completos en [SERVICIOS.md](./SERVICIOS.md)

---

## 🔄 Flujo de Desarrollo

### 1. Fase de Planificación ✅
- [x] Definición de requerimientos
- [x] Diseño de arquitectura
- [x] Especificación de contenidos
- [x] Documentación completa

### 2. Fase de Setup (Próxima)
- [ ] Configurar Tailwind CSS
- [ ] Instalar dependencias necesarias
- [ ] Configurar variables de entorno
- [ ] Crear estructura de carpetas

### 3. Fase de Desarrollo
- [ ] Implementar sistema de diseño
- [ ] Crear componentes base
- [ ] Desarrollar layouts
- [ ] Construir páginas estáticas
- [ ] Integrar WordPress/GraphQL
- [ ] Desarrollar páginas de blog

### 4. Fase de Testing
- [ ] Testing responsive
- [ ] Validación de accesibilidad
- [ ] Optimización de performance
- [ ] SEO audit
- [ ] Testing cross-browser

### 5. Fase de Despliegue
- [ ] Build de producción
- [ ] Configurar hosting
- [ ] Deploy
- [ ] Configurar dominio
- [ ] Monitoreo post-launch

---

## 📦 Comandos Útiles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo en http://localhost:4321

# Producción
npm run build            # Construye el sitio para producción
npm run preview          # Previsualiza el build de producción

# Utilidades
npm run astro check      # Verifica tipos TypeScript
npm run astro --help     # Muestra ayuda de Astro CLI
```

---

## 🤝 Contribución

Este es un proyecto privado para S I Castro Consultores.

### Convenciones de Código
- TypeScript para todo el código
- Componentes Astro con extensión `.astro`
- Tailwind CSS para estilos (no CSS modules)
- Commits descriptivos en español

### Estructura de Commits
```
tipo: descripción breve

Descripción detallada si es necesario
```

Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

---

## 📞 Contacto

**S I Castro Consultores**  
Despacho de Contadores Públicos

- **Web:** (en construcción)
- **Email:** contacto@sicastro.com
- **Ubicación:** México

---

## 📄 Licencia

Proyecto privado - Todos los derechos reservados © 2025 S I Castro Consultores

---

## 🗺️ Roadmap

### Q1 2025
- [x] Planificación y arquitectura
- [ ] Desarrollo del sitio principal
- [ ] Configuración de WordPress
- [ ] Lanzamiento Beta

### Q2 2025
- [ ] Optimizaciones post-lanzamiento
- [ ] Marketing de contenidos (blog)
- [ ] Analytics y métricas
- [ ] Mejoras basadas en feedback

---

**Última actualización:** 2025-10-04  
**Versión:** 0.1.0 (Planificación)  
**Framework:** Astro 5.14.1
