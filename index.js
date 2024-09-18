

const express = require('express')
const routes = require('./routes');
const  mongoose  = require('mongoose');
const bodyParser = require('body-parser');

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

//! Rutas de la app
app.use('/', routes());



app.listen(port, () => console.log(`Example app listening on port ${port}!`))