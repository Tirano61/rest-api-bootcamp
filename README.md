# restapi-curso-Node

   ## Acerca del Curso
   ## UDEMY
   ### Desarrollo web - Nodejs
   ### Node.js - Bootcamp Desarrollo Web inc. MVC y REST APIs
   ### Aprende: MVC, Rest API's, ORMs, Enviar Emails, Autenticación, Subir Archivos, EJS, Pug, React y más - INCLUYE PROYECTOS
   - 11.588 estudiantes
   - Creado por: Jan pablo De la Torre Valdez 

# Servidor
 
  ## El servidor  Está corriendo en Render : https://rest-api-bootcamp.onrender.com

# API

   ### Clientes

    GET
    todos-clientes
    http://localhost:5000/clientes

    POST
    nuevo cliente
    http://localhost:5000/clientes

    GET
    buscar-cliente
    http://localhost:5000/clientes/66e8c16e995514717a97576f

    PUT
    actualizar-cliente
    http://localhost:5000/clientes/66e8c16e995514717a97576f

    DELETE
    delete-cliente
    http://localhost:5000/clientes/66e8c16e995514717a97576f

   ### Productos

    POST
    nuevo-producto
    http://localhost:5000/productos

    POST
    update-producto
    http://localhost:5000/productos

    POST
    todos-producto
    http://localhost:5000/productos

    GET
    producto-id
    http://localhost:5000/productos/66ea143cb7c3f0766a10c6e5

    DELETE
    delete-producto
    http://localhost:5000/productos/66ea13883dd4c9a9d169a915

   ### Pedidos

    POST
    nuevo-pedido
    localhost:5000/pedidos

    Body
    raw (json)
    json
    ```
    {
        "cliente": "66e8c16e995514717a97576f",
        "pedido": [
            {"producto": "66ea143cb7c3f0766a10c6e5", "cantidad": 1},
            {"producto": "66ea1456b7c3f0766a10c6e7", "cantidad": 2}
        ],
        "total": 25400
    }
    ```
    GET
    todos-pedidos


    GET
    pedido por id
    localhost:5000/pedidos/66eb28d1706e4f419f494413


    PUT
    actualizar-pedido
    localhost:5000/pedidos/66eb28d1706e4f419f494413

    Body
    raw (json)
    json
    ```
    {
        "cliente": "66e8c83d16f73cb59140eb3c",
        "pedido": [
            {"producto": "66ea143cb7c3f0766a10c6e5", "cantidad": 3},
            {"producto": "66ea1456b7c3f0766a10c6e7", "cantidad": 1},
            {"producto": "66ea1456b7c3f0766a10c6e7", "cantidad": 4}
        ],
        "total": 32510
    }
    ```
    DELETE
    delete
    localhost:5000/pedi