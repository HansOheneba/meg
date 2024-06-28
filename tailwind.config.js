/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        'first-color': '#222831',
        'second-color': '#393e46',
        'third-color': '#29a19c',
        'fourth-color': '#a3f7bf',
      },
    },
  },
  plugins: [],
}


dev = 'npx tailwindcss -i ./tailwind.css -o ./output.css --watch';