const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = { //Creando un nuevo modulo que vamos a exportar
    entry: './src/index.js', //Entrada principal
    output: {//Donde quedan los archivos resultantes despues del compilación
        path: path.resolve(__dirname, 'dist'), //Detectar donde el dir donde estamos y el dir a donde queremos que bote los archivos
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
    ]
}