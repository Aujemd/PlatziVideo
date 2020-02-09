const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const dotenv = require('dotenv')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

dotenv.config()

module.exports = { //Creando un nuevo modulo que vamos a exportar
    devtool: process.env.NODE_ENV === 'production' ? 'hidden-source-map' : 'cheap-source-map',
    entry: './src/frontend/index.js', //Entrada principal
    mode: process.env.NODE_ENV,
    output: {//Donde quedan los archivos resultantes despues del compilación
        path: process.env.NODE_ENV === 'production' ? path.join(process.cwd(), './src/server/public') : '/', //Detectar donde el dir donde estamos y el dir a donde queremos que bote los archivos
        filename: process.env.NODE_ENV === 'production' ? 'assets/app-[hash].js' : 'assets/app.js',
        publicPath: '/', //Aqui npm es donde webpack va a botar todos los compilados
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimization:{
        minimizer: process.env.NODE_ENV === 'production' ? [new TerserPlugin()] : [] ,
        splitChunks: {
            chunks: 'async',
            name: true,
            cacheGroups:{
                vendors: {
                    name: 'vendors',
                    chunks: 'all',
                    reuseExistingChunk: true,
                    priority: 1,
                    filename: process.env.NODE_ENV === 'production' ? 'assets/vendor-[hash].js' : 'assets/vendor.js',
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
                test: /\.(s*)css$/,
                use: [
                  { loader: MiniCssExtractPlugin.loader },
                  'css-loader',
                  'postcss-loader',
                  {
                    loader:  'sass-loader',
                    options: {
                        prependData: `
                        @import 'src/frontend/assets/styles/Vars.scss';
                        @import 'src/frontend/assets/styles/Media.scss';
                        `,
                    },
                  }
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
        new MiniCssExtractPlugin({
            filename: process.env.NODE_ENV === 'production' ? 'assets/app-[hash].css' : 'assets/app.css',
          }),
        
        process.env.NODE_ENV === 'production' ? new CompressionPlugin({
            test: /\.js$|\.css/,
            filename: '[path].gz',
        }) : false, 
        
        process.env.NODE_ENV === 'production' ? new ManifestPlugin() : false,
    ]
}