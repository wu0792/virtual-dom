const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
        port: 5555,
        contentBase: path.join(__dirname, "/")
    },
    entry: [__dirname + '/src/main.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }
                ]
            }
        ]
    }
}