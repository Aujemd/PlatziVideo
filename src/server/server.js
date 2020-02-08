import express from 'express'
import dotenv from  'dotenv'
import webpack from 'webpack'

dotenv.config()

const ENV = process.env.NODE_ENV
const PORT = process.env.PORT || 3000

const app = express()

if(ENV === 'development'){
    console.log('Loading Dev Config')
    const webpackConfig = require('../../webpack.config')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const compiler = webpack(webpackConfig)
    const serverConfig = {
        contentBase: `https://localhost:${PORT}`,
        port: PORT,
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        historyApiFallback: true,
        stats: {
            colors: true,
        }
    }

    app.use(webpackDevMiddleware(compiler, serverConfig))
    app.use(webpackHotMiddleware(compiler))
}

app.get('*', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="assets/app.css" type="text/css"></link>
    </head>
    <body>
        <div id="app"></div>
        <script src="assets/app.js" type="text/javascript"></script>
        <script src="assets/vendor.js" type="text/javascript"></script>
    </body>
    </html>    
    `)
})

app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }
    console.log('====================================');
    console.log(`Server is running on port ${PORT}`);
    console.log('====================================');
})