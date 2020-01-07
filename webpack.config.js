const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
            },
            {
                test: /\.(s*)css$/,
                use: [
                  { loader: MiniCssExtractPlugin.loader },
                  'css-loader',
                  'sass-loader',
                ],
            },
            {
                test: /\.(png|gif|jpg|svg)$/, //Regla para tratar archivos multimedia que van a ser importados
                use: {
                  loader: 'file-loader',
                  options: {
                    name: 'assets/[hash].[ext]',//Configurando como se llaman nuestros archivos que vamos a manejar que son multimedia, por defecto el webpack le pone un hash y su ext
                  },
                },
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
          }),
    ]
}