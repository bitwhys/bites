const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        grey: {
          1: "var(--grey-1)",
          2: "var(--grey-2)",
          3: "var(--grey-3)",
          4: "var(--grey-4)",
          5: "var(--grey-5)",
          6: "var(--grey-6)",
          7: "var(--grey-7)",
          8: "var(--grey-8)",
          9: "var(--grey-9)",
          10: "var(--grey-10)",
          11: "var(--grey-11)",
          12: "var(--grey-12)",
          a1: "var(--grey-a1)",
          a2: "var(--grey-a2)",
          a3: "var(--grey-a3)",
          a4: "var(--grey-a4)",
          a5: "var(--grey-a5)",
          a6: "var(--grey-a6)",
          a7: "var(--grey-a7)",
          a8: "var(--grey-a8)",
          a9: "var(--grey-a9)",
          a10: "var(--grey-a10)",
          a11: "var(--grey-a11)",
          a12: "var(--grey-a12)",
        },
        inverse: {
          1: "var(--inverse-1)",
          2: "var(--inverse-2)",
          3: "var(--inverse-3)",
          4: "var(--inverse-4)",
          5: "var(--inverse-5)",
          6: "var(--inverse-6)",
          7: "var(--inverse-7)",
          8: "var(--inverse-8)",
          9: "var(--inverse-9)",
          10: "var(--inverse-10)",
          11: "var(--inverse-11)",
          12: "var(--inverse-12)",
          a1: "var(--inverse-a1)",
          a2: "var(--inverse-a2)",
          a3: "var(--inverse-a3)",
          a4: "var(--inverse-a4)",
          a5: "var(--inverse-a5)",
          a6: "var(--inverse-a6)",
          a7: "var(--inverse-a7)",
          a8: "var(--inverse-a8)",
          a9: "var(--inverse-a9)",
          a10: "var(--inverse-a10)",
          a11: "var(--inverse-a11)",
          a12: "var(--inverse-a12)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        DEFAULT: "var(--radius-2)",
        sm: "var(--radius-1)",
        md: "var(--radius-2)",
        lg: "var(--radius-3)",
        xl: "var(--radius-4)",
        "2xl": "var(--radius-5)",
        "3xl": "var(--radius-6)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
