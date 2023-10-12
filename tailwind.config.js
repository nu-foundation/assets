/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**/*.{html,js,php}"],
  theme: {
	  borderRadius: {
		  DEFAULT: '24px',
		  full: '144px',
	  },
	  colors: {
		  "primary": "#1c1917",
          "secondary": "#365314",
          "accent": "#a3e635",
          "neutral": "#f3f4f6",
          "base-100": "#ffffff",
          "info": "#f3f4f6",
          "success": "#d9f99d",
          "warning": "#facc15",
          "error": "#fca5a5",
	  },
    extend: {},
  },
  plugins: [
	  require('@tailwindcss/forms'),
  ],
}