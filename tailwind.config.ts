import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    colors: {
      "blue-900": "#0B0D17",
      "blue-300": "#D0D6F9",
      "white": "#FFFFFF",
    },
    spacing: {
      "unset": "unset",
      "0": "0",
      "25": "2px",
      "50": "4px",
      "100": "8px",
      "150": "12px",
      "200": "16px",
      "300": "24px",
      "400": "32px",
      "500": "40px",
      "600": "48px",
      "800": "64px",
      "1000": "80px",
      "1200": "96px",
      "1600": "128px",
    },
    fontFamily: {
      "bellafair": ['var(--font-bellafair)'],
      "barlow": ['var(--font-barlow)'],
      "barlow-condensed": ['var(--font-barlow-condensed)'],
    },
    fontSize: {
      "xs": '0.875rem',
      "sm": '0.9375rem',
      base: '1rem',
      xl: '1.125rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
      '4xl': '1.75rem',
      '5xl': '2rem',
      '6xl': '2.5rem',
      '7xl': '3.5rem',
      '8xl': '5rem',
      '9xl': '6rem',
      '10xl': '9rem',
    },
    extend: {
      screens: {
        "xs": "375px"
      }
    }
  },
  plugins: [],
};
export default config;
