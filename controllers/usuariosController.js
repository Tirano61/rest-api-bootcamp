const jwt = require("jsonwebtoken");
const Usuarios = require("../models/Usuarios");
const bcrypt = require('bcrypt');


exports.registrarUsuario = async(req, res)=>{
    const usuario = await Usuarios(req.body);
    usuario.password = await bcrypt.hash(req.body.password, 12);
    try {
        await usuario.save();
        res.json({mensaje: 'Usuario creado correctamente'});
    } catch (error) {
        console.log(error);
        res.json({mensaje: 'Hubo un error'});
    }
}


exports.autenticarUsuario =async (req, res, next) =>{
    const usuario = await Usuarios.findOne({email: req.body.email});

    if(!usuario){
        await res.status(401).json({mensaje: 'El usuario no existe'});
        next();
    }else{
        //! El usuario existe verificar password
        if(!bcrypt.compareSync(req.body.password, usuario.password)){
            //! Si el password es incorrecto
            await res.status(401).json({mensaje: 'El password es incorrecto'});
            next();
        }else{
            //! Password correcto firmar el token
            const token = jwt.sign({
                email: usuario.email,
                nombre: usuario.nombre,
                id: usuario._id
            }, process.env.SECRET,{
                expiresIn: '1h'
            });
            //! Retornar el token
            res.json({ token });
        }
    }
}
