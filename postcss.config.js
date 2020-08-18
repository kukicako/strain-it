const tailwindcss = require('tailwindcss')

module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
    purge: [
        'src/**/*.js',
        'src/**/*.jsx',
        'src/**/*.ts',
        'src/**/*.tsx',
        'public/**/*.html',
      ],
    theme: {
        extend: {
            fontFamily: {
               'verdana': 'Verdana, Geneva, sans-serif',
            }
        },
      },
}