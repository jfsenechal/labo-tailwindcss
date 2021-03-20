module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                //https://developer.mozilla.org/fr/docs/Web/CSS/grid-template-columns
                'jfs': 'auto 1fr minmax(200px, 1fr) minmax(400px, 1fr) minmax(120px, max-content)',
                'jfs2': 'repeat(auto-fill, minmax(120px, 1fr))',
            },
            gridTemplateRows: {
                //https://developer.mozilla.org/fr/docs/Web/CSS/grid-template-rows
                'jfsr': '64px auto auto auto',
            }
        },
        colors: {
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
