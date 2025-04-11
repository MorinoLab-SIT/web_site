// tailwind.config.js

module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            light: "#60a5fa",
            DEFAULT: "#3b82f6",
            dark: "#1e40af",
          },
          accent: {
            pink: "#ec4899",
            yellow: "#facc15",
            indigo: "#6366f1",
          },
          background: {
            light: "#f9fafb",
            dark: "#111827",
          },
        },
        fontFamily: {
          sans: ['"Geist"', "sans-serif"],
          mono: ['"Geist_Mono"', "monospace"],
        },
      },
    },
    plugins: [],
  };
  