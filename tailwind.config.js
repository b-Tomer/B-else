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
      backgroundImage: {},
      colors: {
        'main-blue': "var(--main-blue)",
        'main-purple': "var(--main-purple)",
        'main-orange': "var(--main-orange)",
        'main-background': "var(--main-background)",
      },
    },
  },
  plugins: [],
};
