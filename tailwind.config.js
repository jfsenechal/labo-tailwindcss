module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        textColor: {
            'primary': '#3490dc',
            'secondary': '#ffed4a',
            'danger': '#e3342f',
            'marche-dark': '#487f89'
        },
        extend: {
            boxShadow: {
                link: '0 -8px 0 0 #ff16d1 inset',
            },
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
            textDecoration: ['active'],
            textColor: ['active'],
        },
    },
    plugins: [],
};
