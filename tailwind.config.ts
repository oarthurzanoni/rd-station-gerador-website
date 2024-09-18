import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rd: {
          primary: {
            200: "#D8D9FD",
            400: "#6C5AE0",
            600: "#806EFF",
            700: "#4839A3",
            900: "#100C27",
          },
          secondary: {
            400: "#F4CA6D",
            500: "#F2BF4E",
          },
          gray: {
            50: "#FFFFFF",
            100: "#F1F3F5",
            200: "#E1E4E8",
            300: "#CFD3D8",
            600: "#97A1AC",
            700: "#7E8A98",
            800: "#636E7C",
            900: "#212429",
          },
        },
      },
      fontFamily: {
        display: ["Darker Grotesque", "sans-serif"],
        body: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
