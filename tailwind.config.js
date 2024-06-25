/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class", // Use the class strategy for dark mode
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#1a202c", // Dark background
          800: "#2d3748", // Dark elements
        },
        // Define more dark mode colors if needed
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
