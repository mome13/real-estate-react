/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#fafafa",
        "gray-100": "#f5f5f5",
        "gray-500": "#737373",
        "primary-100": "#dbeafe",
        "primary-300": "#93c5fd",
        "primary-500": "#3b82f6",
        "secondary-50": "#fafaf9",
        "secondary-100": "#f5f5f5",
      },
      fontFamily: {
        opsans: ["open sans", "sans-serif"],
        roboto: ["roboto", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: [],
};
