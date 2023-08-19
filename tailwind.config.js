/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  variants: {
    display: ["responsive", "group-hover", "group-focus"],
  },
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ['"Open Sans"', "ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
      },
      fontSize: {
        xs: "14px",
        sm: "14px",
        base: "16px",
        lg: "19px",
      },
      colors: {
        primary: {
          DEFAULT: "#00CDA1",
          50: "#86FFE5",
          100: "#71FFE1",
          200: "#48FFD8",
          300: "#20FFCF",
          400: "#00F6C1",
          500: "#00CDA1",
          600: "#009575",
          700: "#005D49",
          800: "#00251D",
          900: "#000000",
          950: "#000000",
        },
        secondary: {
          DEFAULT: "#ED6C32",
          50: "#FCE5DB",
          100: "#FAD8C8",
          200: "#F7BDA3",
          300: "#F4A27D",
          400: "#F08758",
          500: "#ED6C32",
          600: "#D44F13",
          700: "#A13C0E",
          800: "#6D280A",
          900: "#3A1505",
          950: "#200C03",
        },
      },
    },
  },
  plugins: [],
};