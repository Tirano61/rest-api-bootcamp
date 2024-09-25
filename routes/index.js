const express = require("express");
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');
const pedidosControler = require('../controllers/pedidosControler');
const usuariosController = require("../controllers/usuariosController");


module.exports = function(){
    //! Agrega nuevos clientes via post
    router.post('/clientes', clienteController.nuevoCliente );
    //! Envia todos los clientes
    router.get('/clientes', clienteController.mostrarClientes);
    //! Envia un cliente por id
    router.get('/clientes/:id', clienteController.mostrarCliente);
    //! Actualizar cliente
    router.put('/clientes/:id', clienteController.actualizarCliente);
    //! Eliminar cliente
    router.delete('/clientes/:id', clienteController.eliminarCliente);
    //** PRODUCTOS */
    //! Nuevos productos
    router.post('/productos', 
        productosController.subirArchivo,
        productosController.nuevoProducto
    );
    //! Mostrar Productos
    router.get('/productos', productosController.mostrarProductos);
    //! Mostrar producto por id
    router.get('/productos/:id', productosController.mostrarProducto);
    //! Actualizar producto
    router.put('/productos/:id', 
        productosController.subirArchivo,
        productosController.actualizarProducto
    );
    //! Eliminar productos
    router.delete('/productos/:id', productosController.eliminarProducto);
    router.post('/productos/busqueda/:query', productosController.buscarProductos)
    //** PEDIDOS */
    //! Nuevo Pedido
    router.post('/pedidos/nuevo/:idCliente', pedidosControler.nuevoPedido)
    //! Mostrar todos los pedidos
    router.get('/pedidos', pedidosControler.mostrarPedidos);
    //! Mostrar pedido por id
    router.get('/pedidos/:id', pedidosControler.mostrarPedido);
    //! Actualizar pedido
    router.put('/pedidos/:id', pedidosControler.actualizarPedido);
    //! Elimina un pedido
    router.delete('/pedidos/:id', pedidosControler.eliminarPedido);

    //! usuarios
    router.post('/crear-cuenta', usuariosController.registrarUsuario);
    router.post('/iniciar-sesion', usuariosController.autenticarUsuario);



    return router;
}



