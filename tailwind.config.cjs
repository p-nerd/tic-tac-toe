/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                black: {
                    300: "#1f3641",
                    400: "#192a33",
                    500: "#10212a",
                },
            },
        },
    },
    plugins: [],
};
