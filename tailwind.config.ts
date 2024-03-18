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
        white: "#FFFEE5",
      },
      height: {
        fullPage: "calc(100vh - 80px)",
      },
      fontSize: {
        title: "5vw",
      },
    },
  },
  plugins: [],
};
export default config;
