/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        background: "#1F1F1F",
        primary: "#121212",
        secondary: "#F9C732",
        tertiary: "#202024",
      },
      backgroundImage: {
        "background-xp":
          "url('https://conteudos.xpi.com.br/wp-content/uploads/2021/07/bg-aprenda-a-investir.png?contrast=-10')",
      },
    },
  },
  plugins: [],
};
