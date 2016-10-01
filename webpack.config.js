const webpack = require('webpack');

module.exports = {
    devtool: 'sourcemap',
    entry: './src/app',
    output: {
        filename: 'dist/bundle.js',
        path: __dirname
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        loaders: [
            // {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            // {test: /\.js$/, loader: 'babel'},
            {test: /\.ts$/, loader: 'ts', exclude: /node_modules/}
        ]
    }
};
