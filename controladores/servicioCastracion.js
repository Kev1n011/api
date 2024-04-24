const uuid = require('uuid').v4;
const { mascotas } = require('./mascotas');

const serviciosCastracion = [

    {
        id: uuid(),
        idMascota: mascotas[0].id,
        fecha: "2024-04-23",
        costo: "$120"

    },

    {
        id: uuid(),
        idMascota: mascotas[1].id,
        fecha: "2024-05-13",
        costo: "$120"
    },

]

const obtenerServiciosCastracion = (req, res) => {
    console.log('escuchando clientes');

    res.status(200).json({
        status: 'conexion exitosa',
        datos: {
            servicio: serviciosCastracion
        } 
    });
};

const obtenerServiciosPorId = (req,res) => {

    const { id } = req.params;

    const servicio = serviciosCastracion.find(adopcion => adopcion.id === id)

    if (!servicio){
        return res.status(404).json({
            estatus: 'conexion fallida',
            mensaje: 'usuario no encontrado'

        });
    }


    res.status(200).json({
        estatus: 'conexion exitosa',
        datos: {
            servicio: servicio
        }

    });

}

const agregarServicio = (req, res) => {
    const body = req.body;
    //TODO: agregar al cliente a la BD

    const nuevoServicio = {
        id: uuid(),
        idMascota: body.idMascota,
        fecha: body.fecha,
        costo: body.costo
    }

    serviciosCastracion.push(nuevoServicio)
    res.status(201).json({
        estatus: 'Conexion exitosa',
        datos: {
            servicio: nuevoServicio
        }
    })
}


const borrarServicio = (req,res) => {

    const { id } = req.params;

    const servicioIndex = serviciosCastracion.findIndex(servicio => servicio.id === id);

    if (servicioIndex === -1){
        return res.status(404).json({
            estatus: 'conexion fallida',
            mensaje: 'usuario no encontrado'

        });
    }


    serviciosCastracion.splice(servicioIndex, 1);

    res.status(200).json({
        estatus: 'conexion exitosa',
        datos: {
            servicios: serviciosCastracion
        }

    });

}

const actualizarServicio = (req, res) => {

    const { id } = req.params;

    //Encontrar cliente
    const adopcionIndex = serviciosCastracion.findIndex(servicio => servicio.id === id)

    //Validar si existe
    if (adopcionIndex === -1){
        res.status(404).json({
            estatus: 'conexion fallida',
            mensaje: 'usuario no encontrado'
        });
    }

    //Actualizar cliente
    serviciosCastracion[adopcionIndex] ={
        ...serviciosCastracion[adopcionIndex],
        ...req.body
    }

    //Mandar respuesta
    res.status(200).json({
        estatus: 'conexion exitosa',
        datos: {
            servicio: serviciosCastracion[adopcionIndex],

        }

    });

}









module.exports = {
    obtenerServiciosCastracion,
    obtenerServiciosPorId,
    agregarServicio,
    borrarServicio,
    actualizarServicio,
    serviciosCastracion
}

