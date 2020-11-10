const path = require('path');

module.exports = {
    entry : {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',

    },
    module: {
        rules: [
        {
            test: /\.js$/,
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