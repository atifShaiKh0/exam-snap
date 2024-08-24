/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      FontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        dark_purple: "#000235",
        btn_primary: "#7e7ee3",
        heading_color: "#abd9d9",
      },
    },
  },
  plugins: [],
};
