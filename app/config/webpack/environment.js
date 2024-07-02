const { environment } = require('@rails/webpacker')


const { webpack } = require('webpack')

environment.loaders.append('babel', {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                ["@babel/plugin-proposal-class-properties", { loose: true }],
                ["@babel/plugin-proposal-private-methods", { loose: true }],
                ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
                ["@babel/plugin-proposal-optional-chaining"],
            ]
        }
    }
})

environment.loaders.append('css', {
    test: /\.css$/,
    use: [
        'style-loader',
        'css-loader'
    ]
})

module.exports = environment
