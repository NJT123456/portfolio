/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "bg-color": "#041F60",
        "second-bg-color": "#0476D0",
        bar: "#fff",
      },
      colors: {
        "text-color": "#fff",
        "main-color": "#B4F5F0",
        "second-color": "#041F60",
        "third-color": "#2CEEF0",
      },
    },
  },
  plugins: [],
};
