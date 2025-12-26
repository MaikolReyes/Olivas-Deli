// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            animation: {
                slide: 'slide 15s ease-in-out infinite',
            },
            keyframes: {
                slide: {
                    '0%': { transform: 'translateX(0%)' },
                    '30%': { transform: 'translateX(0%)' },

                    '33%': { transform: 'translateX(-100%)' },
                    '63%': { transform: 'translateX(-100%)' },

                    '66%': { transform: 'translateX(-200%)' },
                    '96%': { transform: 'translateX(-200%)' },

                    '100%': { transform: 'translateX(0%)' },
                },
            },
        },
    },
    plugins: [],
};
