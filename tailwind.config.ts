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
      white: "#FFFFFF",
    },
    spacing: {
      unset: "unset",
      "0": "0",
    },
    fontFamily: {
      bellafair: ["var(--font-bellafair)"],
      barlow: ["var(--font-barlow)"],
      "barlow-condensed": ["var(--font-barlow-condensed)"],
    },
    extend: {
      fontSize: {
        '1': "14px",
        '2': "15px",
        '3': "16px",
        '4': "18px",
        '5': "20px",
        '6': "24px",
        '7': "28px",
        '8': "32px",
        '9': "40px",
        '10': "56px",
        '11': "80px",
        '12': "96px",
        '13': "144px",
      },
      padding: {
        "1": "11.5px",
        "2": "24px",
        "3": "32px",
        "4": "40px",
        "5": "47px",
        "6": "48px",
        "7": "64px",
        "8": "67px",
        "9": "128px",
        "10": "133px",
      },
      margin: {
        "1": "24px",
        "2": "29.5px",
        "3": "42px",
        "4": "48px",
        "5": "127px",
      },
      gap: {
        "1": "8px",
        "2": "12px",
        "3": "16px",
        "4": "24px",
        "5": "30px",
        "6": "32px",
        "7": "40px",
        "8": "48px",
        "9": "64px",
        "10": "66px",
      },
      size: {
        "1": "10px",
        "2": "15px",
        "3": "56px",
        "4": "80px",
        "5": "144px",
        "6": "150px",
        "7": "272px",
        "8": "300px",
        "9": "480px",
      },
      right: {
        "1": "32px",
      },
      width: {
        "1": "3px",
        "2": "222px",
        "3": "608px",
      },
      height: {
        "1": "1px",
        "2": "3px",
        "3": "32px",
        "4": "88px",
        "5": "96px",
        "6": "117px",
        "7": "136px",
        "8": "146px",
        "9": "164px",
        "10": "172px",
        "11": "258px",
        "12": "357px",
        "13": "600px",
      },
      maxWidth: {
        "1": "254px",
        "2": "270px",
        "3": "512px",
        "4": "540px",
        "5": "635px",
        "6": "896px",
        "7": "1110px",
        "8": "1275px",
      },
      minHeight: {
        "1": "340px",
        "2": "382px",
        "3": "464px",
      },
      maxHeight: {
        "1": "382px",
      },
      screens: {
        xs: "375px",
      },
      backgroundImage: {
        "desktop-home": "url('/assets/background-home-desktop.jpg')",
        "tablet-home": "url('/assets/background-home-tablet.jpg')",
        "mobile-home": "url('/assets/background-home-mobile.jpg')",
        "desktop-destination":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "tablet-destination":
          "url('/assets/destination/background-destination-tablet.jpg')",
        "mobile-destination":
          "url('/assets/destination/background-destination-mobile.jpg')",
        "desktop-crew": "url('/assets/crew/background-crew-desktop.jpg')",
        "tablet-crew": "url('/assets/crew/background-crew-tablet.jpg')",
        "mobile-crew": "url('/assets/crew/background-crew-mobile.jpg')",
        "desktop-technology":
          "url('/assets/technology/background-technology-desktop.jpg')",
        "tablet-technology":
          "url('/assets/technology/background-technology-tablet.jpg')",
        "mobile-technology":
          "url('/assets/technology/background-technology-mobile.jpg')",
      },
      boxShadow: {
        button: "0 4px 40px #00000025",
      },
      ringWidth: {
        button: "88px",
      },
    },
  },
  plugins: [],
};
export default config;
