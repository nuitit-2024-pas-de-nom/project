import type { Config } from "tailwindcss";

import daisyui from "daisyui";

import generated from "@tailwindcss/typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
      generated,
      daisyui,
  ],
  daisyui: {
    themes: ["business", "autumn"],
  }

} satisfies Config;
