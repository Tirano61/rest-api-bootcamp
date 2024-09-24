restapi-curso-Node
﻿

Clientes
﻿

GET
todos-clientes
http://localhost:5000/clientes
﻿

POST
nuevo cliente
http://localhost:5000/clientes
﻿

Body
urlencoded
nombre
Dario
apellido
Ramirez
empresa
Udemy
email
correo@correo.com
telefono
3425323556
GET
buscar-cliente
http://localhost:5000/clientes/66e8c16e995514717a97576f
﻿

PUT
actualizar-cliente
http://localhost:5000/clientes/66e8c16e995514717a97576f
﻿

Body
urlencoded
nombre
Carlos
apellido
juarez
empresa
Cartonero
email
correo3@correo.com
telefono
3425323556
DELETE
delete-cliente
http://localhost:5000/clientes/66e8c16e995514717a97576f


Body
urlencoded
nombre
Carlos Ernesto
apellido
juarez del Carrillo
empresa
Cartonero
email
correo@correo.com
telefono
3425323556
Productos


POST
nuevo-producto
http://localhost:5000/productos


Body
form-data
nombre
Remera React
precio
3000
imagen
/H:/PROGRAMAS NODE-JS/-BOOTCAMP CURSO/imagenes+camisas/img/3.jpg
POST
update-producto
http://localhost:5000/productos


Body
form-data
nombre
Remera React
precio
3000
imagen
/H:/PROGRAMAS NODE-JS/-BOOTCAMP CURSO/imagenes+camisas/img/3.jpg
POST
todos-producto
http://localhost:5000/productos


Body form-data
    nombre Remera React
    precio 3000
    imagen path/3.jpg

 GET
producto-id
http://localhost:5000/productos/66ea143cb7c3f0766a10c6e5


DELETE
delete-producto
http://localhost:5000/productos/66ea13883dd4c9a9d169a915

Pedidos

POST
nuevo-pedido
localhost:5000/pedidos


Body
raw (json)
json
{
    "cliente": "66e8c16e995514717a97576f",
    "pedido": [
        {"producto": "66ea143cb7c3f0766a10c6e5", "cantidad": 1},
        {"producto": "66ea1456b7c3f0766a10c6e7", "cantidad": 2}
    ],
    "total": 25400
}
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
{
    "cliente": "66e8c83d16f73cb59140eb3c",
    "pedido": [
        {"producto": "66ea143cb7c3f0766a10c6e5", "cantidad": 3},
        {"producto": "66ea1456b7c3f0766a10c6e7", "cantidad": 1},
        {"producto": "66ea1456b7c3f0766a10c6e7", "cantidad": 4}
    ],
    "total": 32510
}
DELETE
delete
localhost:5000/pedi