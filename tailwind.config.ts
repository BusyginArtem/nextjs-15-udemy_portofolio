import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          50: "var(--color-grey-50)",
          100: "var(--color-grey-100)",
          200: "var(--color-grey-200)",
          300: "var(--color-grey-300)",
          400: "var(--color-grey-400)",
          500: "var(--color-grey-500)",
          600: "var(--color-grey-600)",
          700: "var(--color-grey-700)",
          800: "var(--color-grey-800)",
          900: "var(--color-grey-900)",
        },
        primary: {
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
        },
        success: {
          100: "var(--color-success-100)",
          500: "var(--color-success-500)",
        },
        error: {
          100: "var(--color-error-100)",
          500: "var(--color-error-500)",
        },
      },
      fontSize: {
        xs: "var(--size-1)",
        sm: "var(--size-2)",
        base: "var(--size-4)",
        lg: "var(--size-5)",
        xl: "var(--size-6)",
        "2xl": "var(--size-8)",
        "4xl": "var(--size-16)",
        "5xl": "var(--size-20)",
        "6xl": "var(--size-40)",
      },
    },
  },
  cssVariables: {
    sizes: {
      1: "var(--size-1)",
      2: "var(--size-2)",
      3: "var(--size-3)",
      4: "var(--size-4)",
      5: "var(--size-5)",
      6: "var(--size-6)",
      8: "var(--size-8)",
      16: "var(--size-16)",
      20: "var(--size-20)",
      40: "var(--size-40)",
    },
  },
  plugins: [
    function ({ addBase }: PluginAPI) {
      addBase({
        ":root": {
          "--color-grey-50": "hsl(265, 55%, 96%)",
          "--color-grey-100": "hsl(265, 19%, 88%)",
          "--color-grey-200": "hsl(265, 7%, 70%)",
          "--color-grey-300": "hsl(265, 6%, 66%)",
          "--color-grey-400": "hsl(265, 4%, 57%)",
          "--color-grey-500": "hsl(265, 3%, 53%)",
          "--color-grey-600": "hsl(265, 4%, 42%)",
          "--color-grey-700": "hsl(265, 4%, 31%)",
          "--color-grey-800": "hsl(276, 5%, 20%)",
          "--color-grey-900": "hsl(280, 5%, 13%)",

          "--color-primary-50": "#c8b3ce",
          "--color-primary-100": "#a07aaa",
          "--color-primary-200": "#884c97",
          "--color-primary-300": "#843897",
          "--color-primary-400": "#732392",
          "--color-primary-500": "#5a097a",
          "--color-primary-600": "#480264",
          "--color-primary-700": "#3d0264",

          "--color-success-100": "#a2f0bc",
          "--color-success-500": "#12bd4b",

          "--color-error-100": "#f1acc9",
          "--color-error-500": "#a10c4a",

          "--size-1": "0.25rem",
          "--size-2": "0.5rem",
          "--size-3": "0.75rem",
          "--size-4": "1rem",
          "--size-5": "1.25rem",
          "--size-6": "1.5rem",
          "--size-8": "2rem",
          "--size-16": "4rem",
          "--size-20": "5rem",
          "--size-40": "10rem",
        },
      });
    },
  ],
} satisfies Config;
