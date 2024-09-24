
const Productos = require('../models/Productos');

const multer = require('multer');
const shortid = require('shortid');
const fs = require('fs');

const configuracionMulter = {
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname + '../../uploads/');
        },
        filename: (req, file, cb) => {
            const extension = file.mimetype.split('/')[1];
            cb(null, `${shortid.generate()}.${extension}`);
        }
    }),
    fileFilter(req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error('Formato no válido'))
        }
    }
}

// Pasar la configiguración y el campo
const upload = multer(configuracionMulter).single('imagen');

// Sube un archivo
exports.subirArchivo = (req, res, next) => {
    upload(req, res, function (error) {
        if (error) {
            res.json({ mensaje: error })
        }
        return next();
    })
}

exports.nuevoProducto = async (req, res, next) =>{
    const producto = new Productos(req.body);

    try {
        if(req.file){
            producto.imagen = req.file.filename;
        }
        await producto.save();
        res.json({mensaje: 'Se agrgó un nuevo producto'});
    } catch (error) {
        console.log(error);
        next();
    }
}
//! Muestra todos los productos
exports.mostrarProductos = async (req, res, next) =>{
    const productos = await Productos.find();

    res.json(productos);
}

exports.mostrarProducto = async (req, res, next) =>{
    try {
        const producto  = await Productos.findById(req.params.id);
        if(!producto){
            res.json({mensaje: 'No se ha encontrado el producto'});
            return next();
        }
        res.json(producto);
    } catch (error) {
        console.log(error);
        next()
    }
   
}

//! Actualizar un producto
exports.actualizarProducto = async(req, res, next) =>{
    try {
        let producto = await Productos.findById({ _id: req.params.id });

        let nuevoProducto = req.body;
        //! Verificar si hay imagen nueva
        if(req.file){
            nuevoProducto.imagen = req.file.filename;
        }else{
            nuevoProducto.imagen = producto.imagen;
        }
        let productoGuardado = await Productos.findOneAndUpdate({ _id: req.params.id },nuevoProducto, {
            new: true,
        });

        res.json(productoGuardado);
 
    } catch (error) {
        console.log(error);
        next();
    }

}

//! Elimina un producto
exports.eliminarProducto = async (req, res, next) =>{
    try {
        const producto = await Productos.findOneAndDelete({_id : req.params.id}); 
        if(producto){
            res.json({mensaje: 'Se ha eliminado el producto 🎃👌'})
            return next();
        }
        res.json({mensaje: 'No se ha encontrado el producto 😆🤢🤔👎🏾🤘🏾'})
    } catch (error) {
        console.log(error);
        next();
    }
}


exports.buscarProductos = async(req,res,next) =>{
    try {
        const { query } = req.params; 

        const producto = await Productos.find({ nombre: new RegExp(query, 'i' )});
        res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}

