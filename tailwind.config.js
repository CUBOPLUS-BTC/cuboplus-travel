/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./node_modules/flowbite/**/*.js"
          ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#235fa9',
          orange: '#f39323'
        },
        tourism: {
          blue: '#233876',
          orange: '#FF7A19',
        },
        light: {
          blue: "#5576FF"
        }
      }
  }
  },
  darkMode: "class",
  plugins: [
    require('flowbite/plugin')
  ],
}

