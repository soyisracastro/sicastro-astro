/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta minimalista tipo Notion
        primary: {
          DEFAULT: '#2383E2', // Azul suave para acciones y links
          light: '#E8F3FC',   // Azul muy claro para backgrounds
          dark: '#1A6BB8',    // Azul más oscuro para hover
        },
        // Colores de texto
        text: {
          primary: '#37352F',   // Texto principal - Contraste 12.63:1 AAA
          secondary: '#787774', // Texto secundario - Contraste 4.68:1 AA
          tertiary: '#9B9A97',  // Texto terciario - Labels, captions
        },
        // Backgrounds
        background: {
          DEFAULT: '#F7F7F5',  // Fondo secundario tipo Notion
          white: '#FFFFFF',    // Fondo blanco puro
          hover: '#F1F1EF',    // Fondo para hover states
        },
        // Bordes
        border: {
          DEFAULT: '#E9E9E7',  // Borde sutil estándar
          hover: '#37352F',    // Borde en hover
        },
        // Mantener algunos colores legacy para transición gradual
        dark: {
          DEFAULT: '#37352F',  // Ahora mapea al texto principal
          light: '#787774',    // Mapea al texto secundario
        },
      },
      fontFamily: {
        // Solo Inter para toda la aplicación
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Escala tipográfica clara
        'xs': ['0.75rem', { lineHeight: '1.4' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.5' }],     // 14px
        'base': ['1rem', { lineHeight: '1.6' }],       // 16px
        'lg': ['1.125rem', { lineHeight: '1.7' }],     // 18px
        'xl': ['1.25rem', { lineHeight: '1.6' }],      // 20px
        '2xl': ['1.5rem', { lineHeight: '1.4' }],      // 24px
        '3xl': ['1.75rem', { lineHeight: '1.4' }],     // 28px
        '4xl': ['2.25rem', { lineHeight: '1.3' }],     // 36px
        '5xl': ['3rem', { lineHeight: '1.2' }],        // 48px
        '6xl': ['3.5rem', { lineHeight: '1.1' }],      // 56px
      },
      spacing: {
        // Espaciado consistente
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
      },
      borderRadius: {
        // Radios minimalistas
        DEFAULT: '6px',
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
      },
      boxShadow: {
        // Sombras muy sutiles (solo para casos específicos)
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.08)',
      },
      transitionDuration: {
        // Transiciones rápidas
        'fast': '150ms',
      },
      animation: {
        // Eliminar animaciones complejas, mantener solo lo necesario
        'none': 'none',
      },
      keyframes: {
        // Eliminar keyframes decorativos
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}