# Guía de Configuración WordPress + WPGraphQL

Esta guía te ayudará a configurar WordPress con WPGraphQL para que el sitio Astro pueda consumir el contenido del blog.

---

## 📋 Prerrequisitos

- Hosting con PHP 7.4+ y MySQL 5.6+
- Acceso a cPanel o similar
- Dominio o subdominio configurado (recomendado: blog.sicastro.com)
- Cliente FTP o acceso SSH (opcional)

---

## 🚀 Instalación de WordPress

### Opción 1: Instalación Automática (Recomendada)

La mayoría de los hostings ofrecen instaladores automáticos:

1. **Accede a cPanel**
2. **Busca "WordPress" o "Softaculous"**
3. **Haz clic en "Instalar"**
4. **Completa el formulario:**
   - Protocolo: https://
   - Dominio: blog.sicastro.com (o el que prefieras)
   - Directorio: dejar vacío (instalará en raíz)
   - Nombre del sitio: S I Castro Consultores - Blog
   - Descripción: Blog de noticias fiscales y contables
   - Usuario admin: (elige uno seguro)
   - Contraseña: (usa una contraseña fuerte)
   - Email: contacto@sicastro.com

5. **Haz clic en "Instalar"**
6. **Guarda las credenciales**

### Opción 2: Instalación Manual

Si prefieres instalarlo manualmente:

1. Descarga WordPress desde [wordpress.org/download](https://wordpress.org/download/)
2. Crea una base de datos MySQL en tu hosting
3. Sube los archivos vía FTP
4. Visita tu dominio y sigue el asistente de instalación

---

## 🔌 Instalación de Plugins Esenciales

### 1. WPGraphQL (Principal)

**Paso a paso:**

1. **Accede al admin de WordPress** (blog.sicastro.com/wp-admin)

2. **Ve a Plugins > Añadir nuevo**

3. **Busca "WPGraphQL"**

4. **Encuentra el plugin oficial** por WPGraphQL
   - Autor: WPGraphQL
   - Más de 10,000+ instalaciones activas

5. **Haz clic en "Instalar ahora"**

6. **Haz clic en "Activar"**

7. **Verifica la instalación:**
   - Ve a GraphQL en el menú lateral
   - Deberías ver opciones de Settings y GraphiQL IDE

### 2. WPGraphQL for Yoast SEO (Opcional pero recomendado)

Si usas Yoast SEO:

1. **Ve a Plugins > Añadir nuevo**
2. **Busca "WPGraphQL for Yoast SEO"**
3. **Instalar y activar**

### 3. Yoast SEO (Recomendado)

Para mejorar SEO:

1. **Ve a Plugins > Añadir nuevo**
2. **Busca "Yoast SEO"**
3. **Instalar y activar**
4. **Configura básicos:**
   - Título del sitio
   - Descripción
   - Social media profiles

---

## ⚙️ Configuración de WPGraphQL

### Configuración Básica

1. **Ve a GraphQL > Settings**

2. **Pestaña "General":**
   ```
   ✅ Enable Public Introspection
   ✅ Enable GraphiQL IDE
   ✅ Enable Query Logs (solo desarrollo)
   ❌ Disable GraphiQL IDE (activar en producción)
   ```

3. **Pestaña "GraphiQL IDE Settings":**
   ```
   ✅ Enable query composer
   ✅ Enable Explorer
   ```

4. **Guarda cambios**

### Verificar Endpoint GraphQL

El endpoint de GraphQL estará disponible en:
```
https://blog.sicastro.com/graphql
```

Para verificar:
1. Ve a GraphQL > GraphiQL IDE
2. Ejecuta una query de prueba:

```graphql
{
  generalSettings {
    title
    description
    url
  }
}
```

Si obtienes respuesta, ¡está funcionando correctamente!

---

## 🔐 Configuración de CORS (Si es necesario)

Si el sitio Astro y WordPress están en dominios diferentes, necesitas habilitar CORS.

**Método 1: Plugin (Más fácil)**

1. Instala el plugin "WPGraphQL CORS"
2. Ve a GraphQL > Settings > CORS
3. Añade tu dominio de Astro:
   ```
   https://sicastro.com
   https://www.sicastro.com
   http://localhost:4321 (para desarrollo)
   ```

**Método 2: functions.php**

Añade al final de `functions.php` de tu tema:

```php
add_filter( 'graphql_response_headers_to_send', function( $headers ) {
    return array_merge( $headers, [
        'Access-Control-Allow-Origin'  => 'https://sicastro.com',
        'Access-Control-Allow-Methods' => 'POST, GET, OPTIONS',
        'Access-Control-Allow-Credentials' => 'true',
        'Access-Control-Allow-Headers' => 'Content-Type, Authorization',
    ] );
});
```

---

## 📝 Configuración de Contenido

### Crear Categorías

1. **Ve a Entradas > Categorías**
2. **Crea las siguientes categorías:**

   - **Noticias Fiscales**
     - Slug: noticias-fiscales
     - Descripción: Últimas actualizaciones en legislación fiscal mexicana

   - **Tips Contables**
     - Slug: tips-contables
     - Descripción: Consejos prácticos para llevar tu contabilidad

   - **Actualizaciones Legales**
     - Slug: actualizaciones-legales
     - Descripción: Cambios en leyes y regulaciones

   - **Guías Prácticas**
     - Slug: guias-practicas
     - Descripción: Tutoriales paso a paso para trámites fiscales

### Crear Posts de Ejemplo

Crea al menos 3 posts de prueba con contenido real:

**Post 1: "Nuevas disposiciones fiscales para 2025"**
- Categoría: Noticias Fiscales
- Contenido: Resumen de cambios fiscales importantes
- Imagen destacada: Relacionada con impuestos
- Etiquetas: SAT, Impuestos, 2025

**Post 2: "Cómo organizar tus facturas electrónicas"**
- Categoría: Tips Contables
- Contenido: Guía práctica de organización
- Imagen destacada: Facturas o documentos
- Etiquetas: CFDI, Facturas, Organización

**Post 3: "Obligaciones fiscales del primer trimestre"**
- Categoría: Guías Prácticas
- Contenido: Calendario de obligaciones
- Imagen destacada: Calendario fiscal
- Etiquetas: Calendario, Obligaciones, Trimestre

---

## 🧪 Pruebas de GraphQL

### Query para listar posts

Ve a GraphQL > GraphiQL IDE y prueba:

```graphql
query GetPosts {
  posts(first: 10, where: { status: PUBLISH }) {
    nodes {
      id
      title
      slug
      date
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
    }
  }
}
```

### Query para obtener un post específico

```graphql
query GetPost($slug: String!) {
  postBy(slug: $slug) {
    id
    title
    content
    date
    excerpt
    featuredImage {
      node {
        sourceUrl
        altText
        mediaDetails {
          width
          height
        }
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
    author {
      node {
        name
        avatar {
          url
        }
      }
    }
  }
}
```

Variables:
```json
{
  "slug": "nuevas-disposiciones-fiscales-2025"
}
```

### Query para obtener categorías

```graphql
query GetCategories {
  categories(first: 100) {
    nodes {
      id
      name
      slug
      count
      description
    }
  }
}
```

---

## 🔒 Seguridad en Producción

### 1. Desactivar GraphiQL IDE

En producción, es recomendable desactivar el IDE:

1. Ve a GraphQL > Settings
2. Desmarca "Enable GraphiQL IDE"
3. Guarda cambios

El endpoint `/graphql` seguirá funcionando, pero el IDE no será accesible públicamente.

### 2. Limitar Depth de Queries

Añade a `functions.php`:

```php
add_filter( 'graphql_max_query_depth', function() {
    return 5; // Limita la profundidad de queries
});
```

### 3. Rate Limiting

Considera instalar un plugin de rate limiting como:
- WP GraphQL Rate Limit
- Wordfence Security

### 4. Actualizaciones

Mantén WordPress y todos los plugins actualizados:
- WordPress se actualiza automáticamente (versiones menores)
- Revisa actualizaciones semanalmente en Dashboard > Actualizaciones

---

## 🎨 Configuración del Tema

Puedes usar cualquier tema de WordPress. Recomendaciones:

**Para un blog profesional:**
- **Astra** (gratuito, ligero, personalizable)
- **GeneratePress** (gratuito, rápido, accesible)
- **Kadence** (gratuito, muchas opciones)

**Configuración mínima del tema:**

1. **Apariencia > Personalizar**
2. **Configura:**
   - Colores (usa los de la marca: #004878, #8fc2e9)
   - Tipografía (Quicksand si el tema lo permite)
   - Logo del despacho
   - Favicon

3. **Oculta elementos innecesarios:**
   - Sidebar (si no se usa)
   - Comentarios (si no los quieres)
   - Widgets de footer

---

## 📊 Configuración de Yoast SEO

### Configuración General

1. **Ve a SEO > General**

2. **Pestaña "Características":**
   ```
   ✅ Análisis SEO
   ✅ Análisis de legibilidad
   ✅ Cornerstone content
   ❌ Contador de enlaces (no necesario)
   ```

3. **Ve a SEO > Apariencia en el buscador**

4. **Configuración de URLs:**
   - Título del sitio: `S I Castro Consultores - Blog`
   - Descripción: `Noticias fiscales, contables y financieras`

### Configuración de Posts

1. **Ve a SEO > Apariencia en el buscador > Tipos de contenido**

2. **Posts:**
   ```
   Plantilla del título SEO: %%title%% %%sep%% %%sitename%%
   Plantilla de meta descripción: %%excerpt%%
   ✅ Mostrar posts en resultados de búsqueda
   ```

### Redes Sociales

1. **Ve a SEO > Social**

2. **Facebook:**
   - Imagen por defecto: Logo o imagen corporativa (mínimo 1200x630px)

3. **Twitter:**
   - Imagen por defecto: Misma que Facebook

---

## 📸 Imágenes Destacadas

### Recomendaciones de tamaño

Para que las imágenes se vean bien en el sitio Astro:

- **Tamaño recomendado:** 1200x675px (ratio 16:9)
- **Formato:** JPG o WebP
- **Peso máximo:** 200KB (optimiza con TinyPNG)
- **Alt text:** Siempre incluir descripción descriptiva

### Plugins para optimizar imágenes

- **Smush** (gratuito, compresión automática)
- **ShortPixel** (freemium, mejor calidad)
- **Imagify** (alternativa a ShortPixel)

---

## 🔄 Flujo de Publicación

### Proceso recomendado

1. **Redacta el post en borrador**
2. **Añade categoría y etiquetas**
3. **Sube imagen destacada (optimizada)**
4. **Completa SEO con Yoast:**
   - Meta título
   - Meta descripción
   - Slug amigable
5. **Previsualiza el post**
6. **Publica**
7. **Verifica en GraphiQL que aparece:**

```graphql
{
  posts(first: 1, where: { orderby: { field: DATE, order: DESC } }) {
    nodes {
      title
      slug
    }
  }
}
```

---

## 🌐 Variables de Entorno para Astro

Una vez configurado WordPress, añade a tu proyecto Astro:

**`.env`:**
```env
WORDPRESS_GRAPHQL_URL=https://blog.sicastro.com/graphql
WORDPRESS_SITE_URL=https://blog.sicastro.com
```

**`.env.example`:**
```env
WORDPRESS_GRAPHQL_URL=https://tu-wordpress.com/graphql
WORDPRESS_SITE_URL=https://tu-wordpress.com
```

---

## 🐛 Solución de Problemas Comunes

### Error: "GraphQL endpoint not found"

**Solución:**
1. Verifica que WPGraphQL esté activado
2. Ve a Ajustes > Enlaces permanentes
3. Haz clic en "Guardar cambios" (reescribe reglas)
4. Prueba de nuevo: `tu-sitio.com/graphql`

### Error: "CORS policy"

**Solución:**
1. Instala plugin "WPGraphQL CORS"
2. O añade headers CORS en functions.php (ver sección CORS arriba)

### Posts no aparecen en GraphQL

**Solución:**
1. Verifica que los posts estén publicados (no en borrador)
2. Ve a GraphiQL y ejecuta:
```graphql
{
  posts(first: 10, where: { status: PUBLISH }) {
    nodes {
      title
    }
  }
}
```

### Imágenes destacadas no aparecen

**Solución:**
1. Asegúrate de que el post tiene imagen destacada
2. En la query, incluye:
```graphql
featuredImage {
  node {
    sourceUrl
  }
}
```

---

## 📚 Recursos Útiles

- [WPGraphQL Docs](https://www.wpgraphql.com/docs/)
- [WPGraphQL Community](https://wpgraphql.com/community)
- [Yoast SEO Guide](https://yoast.com/wordpress-seo/)
- [WordPress Codex](https://codex.wordpress.org/)

---

## ✅ Checklist de Configuración

Antes de conectar Astro con WordPress, verifica:

- [ ] WordPress instalado y funcionando
- [ ] WPGraphQL plugin instalado y activado
- [ ] Endpoint `/graphql` accesible
- [ ] Al menos 3 posts de prueba publicados
- [ ] Categorías creadas
- [ ] Imágenes destacadas en todos los posts
- [ ] CORS configurado (si aplica)
- [ ] Yoast SEO instalado y configurado
- [ ] GraphiQL IDE funciona correctamente
- [ ] Query de prueba exitosa

---

## 🚀 Próximo Paso

Una vez completada esta configuración, el sitio Astro podrá consumir el contenido mediante las queries GraphQL definidas en `src/lib/wordpress/queries.ts`.

**Para probar la integración:**

1. Copia la URL del endpoint GraphQL
2. Actualiza `.env` en el proyecto Astro
3. Ejecuta el sitio en desarrollo
4. Visita `/blog` para ver los posts

---

**Última actualización:** 2025-10-04  
**Autor:** Guía de configuración para S I Castro Consultores