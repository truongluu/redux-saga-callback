const path = require('path');

const libPath = path.resolve(__dirname, '../', 'src');
const outPath = path.resolve(__dirname, '../', 'dist');

console.warn('============= reading webpack.lib.config.js ====================');

module.exports = {
    mode: 'production',
    entry: path.join(libPath, 'index.ts'),
    output: {
        path: outPath,
        filename: 'index.js',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: libPath,
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve(__dirname, './babel.config.js'),
                },
            },
            {
                test: /\.jsx?$/,
                include: libPath,
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve(__dirname, './babel.config.js'),
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    externals: ['redux', 'redux-saga'],
};