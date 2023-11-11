/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.html',
        './src/**/*.jsx',
    ],
    theme: {
        extend: {

            fontFamily: {
                custom: ['helvetica neue', 'sans'],
                Roboto: 'Roboto',
            },

        },
    },
}