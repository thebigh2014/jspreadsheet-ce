const path = require('path');
const webpack = require('webpack');

let dependencies = {
    jsuites: "jsuites",
    jQuery: "jQuery"
}

module.exports = {
    target: ['web', 'es5'],
    entry: './src/index.js',
    mode: 'production',
    externals: dependencies,
    output: {
        filename: 'index.js',
        library: 'jspreadsheet',
        libraryTarget: 'umd',
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `if (! jSuites && typeof(require) === 'function') {
                var jSuites = require('jsuites');
            }
            if (! jQuery && typeof(require) === 'function') {
                var jQuery = require('jQuery');
            }`,
            raw: true,
        }),
    ],
    devServer: {
        static : {
            directory : path.join(__dirname, "/dist")
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        port: 3007,
        devMiddleware: {
            publicPath: "https://localhost:3000/dist/",
        },
        hot: "only",
    },
    stats: { warnings:false },
};
