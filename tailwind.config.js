/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'md': '4px 4px 6px rgba(0, 0, 0, 0.7)'
      },
      backgroundImage: {},
      fontFamily: {
        'ibm': ['IBM Plex Sans Hebrew', 'sans-serif'],
        'cus': ['Cousine', 'sans-serif'],
        'noto': ['Noto Sans Hebrew', 'sans-serif'],
      },
      colors: {
        'main-blue': "var(--main-blue)",
        'main-purple': "var(--main-purple)",
        'main-orange': "var(--main-orange)",
        'main-background': "var(--main-background)",
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
