const express = require('express');
const {
     obtenerClientes,
     agregarUsuario, 
     obtenerClientesPorId,
     borrarCliente,
     actualizarCliente
    } = require ('./../controladores/clientes')
const router = express.Router();


router.get('/', obtenerClientes );

router.get('/:id', obtenerClientesPorId);

router.post('/', agregarUsuario);

router.delete('/:id', borrarCliente);

router.patch('/:id', actualizarCliente);

module.exports = router;