/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        'primary': {
          '50': '#eefffc',
          '100': '#E9FFFE',
          '200': '#8efff3',
          '300': '#D8F8F7',
          '400': '#19e8dd',
          '500': '#00C0B9',
          '600': '#00a4a2',
          '700': '#028382',
          '800': '#003A38',
          '900': '#0c5555',
          '950': '#003134',
        },
        'secondary': {
          '50': "#E0EDFF",
          '100': "#C2DAFF",
          '200': "#80B3FF",
          '300': "#428EFF",
          '400': "#0066FF",
          '500': "#004CBF",
          '600': "#003D99",
          '700': "#002F75",
          '800': "#001F4D",
          '900': "#001029",
          '950': "#000814",
        },
        "neutral-gray": {
          '50': "#E8E8E8",
          '100': "#D1D1D1",
          '200': "#A1A1A1",
          '300': "#727272",
          '400': "#616161",
          '500': "#525252",
          '600': "#424242",
          '700': "#303030",
          '800': "#212121",
          '900': "#0F0F0F",
          '950': "#080808"
        },
      }, 
      boxShadow: {
        'custom-blue': '0px 3.42px 17.94px 0.85px rgba(48, 123, 196, 0.1)',
      },
    },
  },
  plugins: [],
}

