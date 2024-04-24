const uuid = require('uuid').v4;
const { clientes } = require('./clientes');
const { mascotas } = require('./mascotas');

const adopciones = [

    {
        id: uuid(),
        nombreCliente: clientes[0].nombre,
        referencias: "no se",
        motivoAdpocion: "quiero adoptar a un perro para que haga compañia al que ya tengo",
        fechaAdpocion: "2024-12-11",
        nombreMascota: mascotas[0].nombre,
        telefono: clientes[0].telefono,
        ciudad: clientes[0].ciudad,
        colonia: clientes[0].colonia,
        cp: clientes[0].cp

    },

    {
        id: uuid(),
        nombreCliente: clientes[1].nombre,
        referencias: "no se",
        motivoAdpocion: "quiero adoptar a un perro para que haga compañia al que ya tengo",
        fechaAdpocion: "2024-12-11",
        nombreMascota: mascotas[1].nombre,
        telefono: clientes[1].telefono,
        ciudad: clientes[1].ciudad,
        colonia: clientes[1].colonia,
        cp: clientes[1].cp

    },

]

const obtenerAdopciones = (req, res) => {
    console.log('escuchando clientes');

    res.status(200).json({
        status: 'conexion exitosa',
        datos: {
            adopciones: adopciones
        } 
    });
};

const obtenerAdopcionesPorId = (req,res) => {

    const { id } = req.params;

    const adopcion = adopciones.find(adopcion => adopcion.id === id)

    if (!adopcion){
        return res.status(404).json({
            estatus: 'conexion fallida',
            mensaje: 'usuario no encontrado'

        });
    }


    res.status(200).json({
        estatus: 'conexion exitosa',
        datos: {
            adopcion: adopcion
        }

    });

}

const agregarAdopcion = (req, res) => {
    const body = req.body;
    //TODO: agregar al cliente a la BD

    const nuevaAdopcion = {
        id: uuid(),
        nombreCliente: body.nombreCliente,
        referencias: body.referencias,
        motivoAdpocion: body.motivoAdpocion,
        fechaAdpocion: body.fechaAdpocion,
        nombreMascota: body.nombreMascota,
        telefono: body.telefono,
        ciudad: body.ciudad,
        colonia: body.colonia,
        cp: body.cp
    }

    adopciones.push(nuevaAdopcion)
    res.status(201).json({
        estatus: 'Conexion exitosa',
        datos: {
            adopcion: nuevaAdopcion
        }
    })
}


const borrarAdopcion = (req,res) => {

    const { id } = req.params;

    const adopcionIndex = adopciones.findIndex(adopcion => adopcion.id === id);

    if (adopcionIndex === -1){
        return res.status(404).json({
            estatus: 'conexion fallida',
            mensaje: 'usuario no encontrado'

        });
    }


    adopciones.splice(adopcionIndex, 1);

    res.status(200).json({
        estatus: 'conexion exitosa',
        datos: {
            adopciones: adopciones
        }

    });

}

const actualizarAdopcion = (req, res) => {

    const { id } = req.params;

    //Encontrar cliente
    const adopcionIndex = adopciones.findIndex(adopcion => adopcion.id === id)

    //Validar si existe
    if (adopcionIndex === -1){
        res.status(404).json({
            estatus: 'conexion fallida',
            mensaje: 'usuario no encontrado'
        });
    }

    //Actualizar cliente
    adopciones[adopcionIndex] ={
        ...adopciones[adopcionIndex],
        ...req.body
    }

    //Mandar respuesta
    res.status(200).json({
        estatus: 'conexion exitosa',
        datos: {
            adopcion: adopciones[adopcionIndex],

        }

    });

}









module.exports = {
    obtenerAdopciones,
    obtenerAdopcionesPorId,
    agregarAdopcion,
    borrarAdopcion,
    actualizarAdopcion,
    adopciones
}

