const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')

module.exports = { //Creando un nuevo modulo que vamos a exportar
    entry: './src/frontend/index.js', //Entrada principal
    output: {//Donde quedan los archivos resultantes despues del compilación
        path: path.resolve(__dirname, 'dist'), //Detectar donde el dir donde estamos y el dir a donde queremos que bote los archivos
        filename: 'bundle.js',
        publicPath: '/', //Aqui es donde webpack va a botar todos los compilados
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimization:{
        splitChunks: {
            chunks: 'async',
            name: true,
            cacheGroups:{
                vendors: {
                    name: 'vendors',
                    chunks: 'all',
                    reuseExistingChunk: true,
                    priority: 1,
                    filename: 'assets/vendor.js',
                    enforce: true,
                    test(module, chunks){
                        const name = module.nameForCondition && module.nameForCondition()
                        return chunks.some(chunks => {
                            chunks.name !== 'vendor' && /[\\/]node_modules[\\/]/.test(name)
                        })
                    }
                }
            },
        }
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                enforce: 'pre', //va a ejecutar eslint y no deja compilar hasta que se fixeen los errores de eslint
                use: {
                    loader: "eslint-loader",
                    loader: "babel-loader",
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
                  'postcss-loader',
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
    devServer:{
        historyApiFallback: true
    },//Configuración para encargarse de devserver para el manejo de rutas
    
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            options:{
                postcss:[
                    autoprefixer(), 
                ]
            }
        }),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
          }),
    ]
}