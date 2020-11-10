const path = require('path');

module.exports = {
    entry : {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',

    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        filename: 'app.bundle.js',
        port: 9000
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                cacheDirectory: true,
              },
            } 
        }
    ]
    }
}