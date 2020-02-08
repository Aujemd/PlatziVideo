require('ignore-styles') //Ignora estilos dentro del server

require('@babel/register')({ //Paquete que nos permite bindear en realtime 
    ignore: [/(node_modules)/],
    presets: ['@babel/preset-env', '@babel/preset-react'],
})

require('./server')