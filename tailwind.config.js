/** @type {import('tailwindcss').Config} */
export default {
    content: [ './src/**/*.{html,svelte,js,ts}' ],
    daisyui: {
        themes: ["light", "dark", "dim", "pastel"],
      },
    theme: {
        extend: {},
    },
    plugins: [ require('daisyui') ],
}
