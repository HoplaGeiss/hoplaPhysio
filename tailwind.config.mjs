/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FAF8F3',
          100: '#F5F0E6',
        },
        sage: {
          700: '#2F6B5C',
          800: '#26564A',
          900: '#1E443B',
        },
      },
    },
  },
};

