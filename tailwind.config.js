module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {}, colors: {
            transparent: 'transparent',
            current: 'currentColor',
            pink: {
                light: '#ff7ce5',
                DEFAULT: '#ff49db',
                dark: '#ff16d1',
            },
            marchebe: {
                light: '#FFCF1B',
                DEFAULT: '#4AE0C7',
                dark: '#487f89',
            },
        }
    },
    variants: {
        extend: {
            backgroundColor: ["active"],
        },
    },
    plugins: [],
};
