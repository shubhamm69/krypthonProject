/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
  "./screens/**/*.{js,jsx,ts,tsx}",
  "./pages/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'Primary-Orange': '#F49229',
        'Primary-Purple': '#946DF5',
        'Primary-Yellow': '#F4C15A',
        'Primary-Black': '#000000',
        'Primary-White': '#FFFFFF',
        'Primary-Green': '#01A48F',
        'Primary-Red': 'red',
      },
    },
  },
 plugins: [],
}