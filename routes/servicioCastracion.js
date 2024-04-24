const express = require('express');
const {
     obtenerServiciosCastracion,
     obtenerServiciosPorId,
     agregarServicio,
     actualizarServicio,
     borrarServicio

     
    } = require ('../controladores/servicioCastracion')
const router = express.Router();

router.get('/', obtenerServiciosCastracion);

router.get('/:id', obtenerServiciosPorId);

router.post('/', agregarServicio);

router.delete('/:id', borrarServicio);

router.patch('/:id', actualizarServicio);

module.exports = router;