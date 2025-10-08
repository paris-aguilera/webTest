/** @type {import('tailwindcss').Config} */
export default {
  // 1. Contenido a escanear
  // Indica a Tailwind dónde encontrar las clases que estás usando.
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],

  // 2. Modo Oscuro (Día/Noche)
  // Configurado para usar la clase 'dark' en el elemento <html>.
  darkMode: 'class',

  // 3. Tema y Extensiones
  theme: {
    extend: {
      // Configuración de Colores
      colors: {
        // Colores específicos para tu degradado de texto
        'degrade-start': '#BE07AE', // Morado/Magenta
        'degrade-end': '#110773',   // Azul Oscuro
      },
      
      // *** NOTA: La sección 'fontFamily' ha sido eliminada. ***
    },
  },

  // 4. Plugins
  plugins: [],
}