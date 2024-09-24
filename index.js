

const express = require('express')
const routes = require('./routes');
const  mongoose  = require('mongoose');
const bodyParser = require('body-parser');


//! Cors permite que un cliente se conecte a otro servidor para el intercambio de recursos
const cors = require('cors');

//! Conectar Mongo
mongoose.Promise = globalThis.Promise;
mongoose.connect('mongodb://localhost/restapi', {
    //useNewUrlParser: true,
});

//! Crear ek servudor
const app = express()

//! habilitar el bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 5000

//! Habilitar cors
app.use(cors());

//! Rutas de la app
app.use('/', routes());

//! Carpeta publica
app.use(express.static('uploads'));



app.listen(port, () => console.log(`Example app listening on port ${port}!`))