const uuid = require('uuid').v4;


const empleados = [

    {
        id: uuid(),
        nombre: 'Luis Oscar',
        fechaNacimiento: "2016-10-16",
        ciudad: "La Paz",
        colonia: "Santa Fe",
        cp: "23076",
        sueldo: "$12000",
        telefono: "6123245478"


    },

    {
        id: uuid(),
        nombre: 'Eduardo Mendez',
        fechaNacimiento: "2016-11-22",
        ciudad: "La Paz",
        colonia: "Indeco",
        cp: "23076",
        sueldo: "$150",
        telefono: "6120986545"


    },

]

const obtenerEmpleados = (req, res) => {

    res.status(200).json({
        status: 'conexion exitosa',
        datos: {
            empleado: empleados
        } 
    });
};

const obtenerEmpleadosPorId = (req,res) => {

    const { id } = req.params;

    const empleado = empleados.find(empleado => empleado.id === id)

    if (!empleado){
        return res.status(404).json({
            estatus: 'conexion fallida',
            mensaje: 'usuario no encontrado'

        });
    }


    res.status(200).json({
        estatus: 'conexion exitosa',
        datos: {
            empleado: empleado
        }

    });

}

const agregarEmpleado = (req, res) => {
    const body = req.body;

    const nuevoEmpleado = {
        id: uuid(),
        nombre: body.nombre,
        fechaNacimiento: body.fechaNacimiento,   
        ciudad: body.ciudad,
        colonia: body.colonia,
        cp: body.cp,
        sueldo: body.sueldo,
        telefono: body.telefono
    }

    empleados.push(nuevoEmpleado)
    res.status(201).json({
        estatus: 'Conexion exitosa',
        datos: {
            empleado: nuevoEmpleado
        }
    })
}

const borrarEmpleado = (req,res) => {

    const { id } = req.params;

    const empleadoIndex = empleados.findIndex(empleado => empleado.id === id);

    if (empleadoIndex === -1){
        return res.status(404).json({
            estatus: 'conexion fallida',
            mensaje: 'usuario no encontrado'

        });
    }


    empleados.splice(empleadoIndex, 1);

    res.status(200).json({
        estatus: 'conexion exitosa',
        datos: {
            empleados: empleados
        }

    });

}

const actualizarEmpleado = (req, res) => {

    const { id } = req.params;

    //Encontrar cliente
    const empleadoIndex = empleados.findIndex(empleado => empleado.id === id)

    //Validar si existe
    if (empleadoIndex === -1){
        res.status(404).json({
            estatus: 'conexion fallida',
            mensaje: 'usuario no encontrado'
        });
    }

    //Actualizar cliente
    empleados[empleadoIndex] ={
        ...empleados[empleadoIndex],
        ...req.body
    }

    //Mandar respuesta
    res.status(200).json({
        estatus: 'conexion exitosa',
        datos: {
            empleado: empleados[empleadoIndex],
            
        }

    });

}



module.exports = {
    obtenerEmpleados,
    obtenerEmpleadosPorId,
    agregarEmpleado,
    borrarEmpleado,
    actualizarEmpleado

   
}