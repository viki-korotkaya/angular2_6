//Сборщик
var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //plugin of minimization
module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts'
    },
    output: {
        path: path.resolve(__dirname, './public'), //path to directoryoutput files
        publicPath: '/public/',
        filename: "[name].js" // name of creating file
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [ //загрузчик для ts
            {
                test: /\.ts$/, // determine type of file
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {configFileName: path.resolve(__dirname, 'tsconfig.json')}
                    },
                    'angular2-template-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve(__dirname, 'src'), //directory with source files
            {} //карта маршрутов
        ),
        new UglifyJSPlugin()
    ]
}