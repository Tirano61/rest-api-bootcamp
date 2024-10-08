const jwt = require("jsonwebtoken");



module.exports = (req, res, next) =>{
    //! autorizacion por el header
    const authHeader = req.get('Authorization');
    if(!authHeader){
        const error = new Error('No autenticado');
        error.statusCode = 401;
        throw error;
    }

    const token = authHeader.split(' ')[1]; 
    let revisarToken;
    try {
        revisarToken = jwt.verify(token, process.env.SECRET );

    } catch (error) {
        error.statusCode = 500;
        throw error;
    }

    //! si es valido pero hay algun error
    if(!revisarToken){
        const error = new Error('No autenticado');
        error.statusCode = 401;
        throw error;
    }

    next();
}