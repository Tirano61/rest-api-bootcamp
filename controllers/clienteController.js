const Clientes = require("../models/Clientes");




//! agrega un nuevo cliente
exports.nuevoCliente = async (req, res, next)=>{
    const cliente = new Clientes(req.body);
    try {
        //! Almacenar el registro
        await cliente.save();
        res.json({ 
            type: 'ok',
            mensaje: 'Se agregó un nuevo cliente !!!'
        });
    } catch (error) {
        //! Si hay un error
        if(error.code === 11000){
            res.json({
                type: 'error',
                mensaje: 'Ese cliente ya está registrado'
            });
            next();
        }else{
            res.json({
                type: 'error',
                mensaje: 'No se pudo insertar un nuevo cliente'
            });
            next();
        }
    }
}
//! Mostrar todos los clientes
exports.mostrarClientes = async (req, res, next) =>{
    try {
        const clientes = await Clientes.find();
        res.json({
            clientes,
        });
    } catch (error) {
        res.json({
            type: 'error',
            mensaje: 'No se pudo insertar un nuevo cliente'
        });
        next();
    }

    
}
//! Mostrar clliente por id
exports.mostrarCliente = async (req,res, next) =>{
    try {
        const cliente = await Clientes.findById(req.params.id);

        if(!cliente){
            res.json({
                type: 'error',
                mensaje: 'El cliente no existe' 
            })
            return next();
        }
        res.json({
            type: 'ok',
            cliente
        })
    } catch (error) {
        res.json({
            type: 'error',
            mensaje: 'No se pudo encontrar el cliente'
        });
        next();
    }
}

exports.actualizarCliente = async(req, res, next) =>{
    try {
        const cliente = await Clientes.findOneAndUpdate( {_id : req.params.id}, req.body, {new: true} );
        
        res.json({
            type: 'ok',
            mensaje: 'Los datos se han cambiado correctamente',
            cliente
        });

    } catch (error) {
        console.log(error);
        res.json({
            type: 'error',
            mensaje: 'No se pudo actualizar'
        })
        next();
    }
}
//! Eliminar Cliente
exports.eliminarCliente = async(req, res, next) =>{
    try {
        await Clientes.findOneAndDelete( {_id: req.params.id} );
        res.json({ mensaje: 'El cliente fue eliminado 👌👌🙏'})
    } catch (error) {
        console.log(error);
        res.json({ mensaje: 'No se pudo eliminar el Cliente 🎃🔐!!!'})
        next();
    }
}