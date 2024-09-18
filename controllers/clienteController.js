const Clientes = require("../models/Clientes");




//! agrega un nuevo cliente
exports.nuevoCliente = async (req, res, next)=>{
    const cliente = new Clientes(req.body);
    try {
        //! Almacenar el registro
        await cliente.save();
        res.json({ mensaje: 'Se agregó un nuevo cliente !!!'})
    } catch (error) {
        //! Si hay un error
        console.log(error);
        next();
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
        console.log(error);
        next();
    }

    
}
//! Mostrar clliente por id
exports.mostrarCliente = async (req,res, next) =>{
    try {
        const cliente = await Clientes.findById(req.params.id);

        if(!cliente){
            res.json({
                mensaje: 'El cliente no existe' 
            })
            next();
        }
        res.json({
            cliente
        })
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.actualizarCliente = async(req, resizeBy, next) =>{
    try {
        const cliente = await Clientes.findOneAndUpdate( {_id : req.params.id}, req.body, {new: true} );
        
        resizeBy.json(cliente);

    } catch (error) {
        console.log(error);
        res.json({
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