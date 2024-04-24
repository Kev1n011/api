const express = require('express');
const {
     obtenerMascotas,
     obtenerMascotasPorId,
     agregarMascota,
     borrarMascota,
     actualizarMascota

     
    } = require ('./../controladores/mascotas')
const router = express.Router();

router.get('/', obtenerMascotas);

router.get('/:id', obtenerMascotasPorId);

router.post('/', agregarMascota);

router.delete('/:id', borrarMascota);

router.patch('/:id', actualizarMascota);

module.exports = router;