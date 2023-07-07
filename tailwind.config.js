/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '500px',
      'md': '700px',
      'lg': '900px',
      'xl': '1100px',
      '2xl': '1300px',
      '3xl': '1500px',
      '4xl': '1700px',
      '5xl': '1900px',
      '6xl': '2100px',
      // max-w-screen-2xl max-w-screen-3xl max-w-screen-4xl ...
    },
    extend: {
      gridTemplateColumns: {
        'playlists-mobile': 'repeat(auto-fill, minmax(208px, 1fr))',
        'playlists-tablet': 'repeat(auto-fill, minmax(266px, 1fr))',
        'playlists-desktop': 'repeat(auto-fill, minmax(180px, 1fr))',
        // class="grid-cals-main" => grid-template-colums: repeat(auto-fit, minmax(180px, 1fr))
      }
    }
  },
  plugins: [],
};