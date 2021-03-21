module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'hero-pattern': "url('/public/fond4.jpg')",
                'footer-texture': "url('/img/footer-texture.png')",
            }),
            boxShadow: {
                link: '0 -8px 0 0 #ff16d1 inset',
            },
            gridTemplateColumns: {
                //https://developer.mozilla.org/fr/docs/Web/CSS/grid-template-columns
                'jfs': 'auto 1fr minmax(200px, 1fr) minmax(400px, 1fr) minmax(180px, max-content)',
                'jfs2': 'repeat(auto-fill, minmax(120px, 1fr))',
            },
            gridTemplateRows: {
                //https://developer.mozilla.org/fr/docs/Web/CSS/grid-template-rows
                'jfsr': '64px auto auto auto',
            },
            fontFamily: {
                headline: "Poppins, sans-serif",
            },
            colors: {
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
            },
            spacing: {
                '134': '34rem',
            }
        },
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
