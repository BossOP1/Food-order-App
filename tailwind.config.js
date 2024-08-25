/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '640px',  // Small screens (like phones)
      md: '768px',  // Medium screens (like tablets)
      lg: '1024px', // Large screens (like desktops)
      xl: '1280px', // Extra large screens (like large desktops)
      '2xl': '1536px', // Extra extra large screens
    },
  },
  plugins: [],
}

