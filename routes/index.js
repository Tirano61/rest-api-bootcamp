const express = require("express");
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');
const pedidosControler = require('../controllers/pedidosControler');
const usuariosController = require("../controllers/usuariosController");
//! middleware para proteger las rutas
const auth = require('../middleware/auth');

module.exports = function(){
    //! Agrega nuevos clientes via post
    router.post('/clientes', 
        auth,
        clienteController.nuevoCliente 
    );
    //! Envia todos los clientes
    router.get('/clientes', 
        auth,
        clienteController.mostrarClientes);
    //! Envia un cliente por id
    router.get('/clientes/:id', 
        auth,
        clienteController.mostrarCliente);
    //! Actualizar cliente
    router.put('/clientes/:id', 
        auth,
        clienteController.actualizarCliente);
    //! Eliminar cliente
    router.delete('/clientes/:id', 
        auth,
        clienteController.eliminarCliente);
    //** PRODUCTOS */
    //! Nuevos productos
    router.post('/productos', 
        auth,
        productosController.subirArchivo,
        productosController.nuevoProducto
    );
    //! Mostrar Productos
    router.get('/productos', 
        auth,
        productosController.mostrarProductos);
    //! Mostrar producto por id
    router.get('/productos/:id', 
        auth,
        productosController.mostrarProducto);
    //! Actualizar producto
    router.put('/productos/:id', 
        auth,
        productosController.subirArchivo,
        productosController.actualizarProducto
    );
    //! Eliminar productos
    router.delete('/productos/:id', 
        auth,
        productosController.eliminarProducto);
    router.post('/productos/busqueda/:query', 
        auth,
        productosController.buscarProductos)
    //** PEDIDOS */
    //! Nuevo Pedido
    router.post('/pedidos/nuevo/:idCliente', 
        auth,
        pedidosControler.nuevoPedido)
    //! Mostrar todos los pedidos
    router.get('/pedidos', 
        auth,
        pedidosControler.mostrarPedidos);
    //! Mostrar pedido por id
    router.get('/pedidos/:id', 
        auth,
        pedidosControler.mostrarPedido);
    //! Actualizar pedido
    router.put('/pedidos/:id', 
        auth,
        pedidosControler.actualizarPedido);
    //! Elimina un pedido
    router.delete('/pedidos/:id', 
        auth,
        pedidosControler.eliminarPedido);

    //! usuarios
    router.post('/crear-cuenta', 
        auth,
        usuariosController.registrarUsuario);
        
    router.post('/iniciar-sesion', usuariosController.autenticarUsuario);



    return router;
}



