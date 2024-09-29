

const express = require('express')
const routes = require('./routes');
const  mongoose  = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({path: '.env'});

//! Cors permite que un cliente se conecte a otro servidor para el intercambio de recursos
const cors = require('cors');

//! Conectar Mongo
mongoose.Promise = globalThis.Promise;
mongoose.connect( process.env.DB_URL_ATLAS, {
    //useNewUrlParser: true,
});

//! Crear ek servudor
const app = express()

//! habilitar el bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//! Definir un dominio para recibir las peticiones
const whiteList = [ process.env.FRONTEND_URL ];
const corsOptions = {
    origin: (origin,callback)=>{
        //! Rebisar si la peticion viene de un servidor que está en la lista blanca
        const existe = whiteList.some(dominio => dominio === origin );
        if(existe){
            callback(null, true);
        }else{
            callback(new Error('No permitido por CORS'))
        }
    }
};

//! Habilitar cors
app.use(cors(corsOptions));

//! Rutas de la app
app.use('/', routes());

//! Carpeta publica
app.use(express.static('uploads'));

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;


app.listen(port, host,() => {
    console.log('El servidor esta funcionando');
})