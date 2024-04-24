const uuid = require('uuid').v4;

const clientes = [

    {
        id: uuid(),
        nombre: 'Kevin Alberto',
        fechaRegistro: "2022-12-21",
        correo: "kevin@gmail.com",
        ciudad: "La Paz",
        colonia: "Santa Fe",
        cp: "23076",
        telefono: "6123245478"


    },

    {
        id: uuid(),
        nombre: 'Luis Manuel',
        fechaRegistro: "2022-12-21",
        correo: "luis@gmail.com",
        ciudad: "La Paz",
        colonia: "Santa Fe",
        cp: "23076",
        telefono: "6123245478"
    },

]

const obtenerClientes = (req, res) => {
    console.log('escuchando clientes');

    res.status(200).json({
        status: 'conexion exitosa',
        datos: {
            usuarios: clientes
        } 
    });
};

const obtenerClientesPorId = (req,res) => {

    const { id } = req.params;

    const cliente = clientes.find(cliente => cliente.id === id)

    if (!cliente){
        return res.status(404).json({
            estatus: 'conexion fallida',
            mensaje: 'usuario no encontrado'

        });
    }


    res.status(200).json({
        estatus: 'conexion exitosa',
        datos: {
            cliente: cliente
        }

    });

}

const agregarUsuario = (req, res) => {
    const body = req.body;
    //TODO: agregar al cliente a la BD

    const nuevoCliente = {
        id: uuid(),
        nombre: body.nombre,
        edad: body.edad,
    }

    clientes.push(nuevoCliente)
    res.status(201).json({
        estatus: 'Conexion exitosa',
        datos: {
            cliente: nuevoCliente
        }
    })
}


const borrarCliente = (req,res) => {

    const { id } = req.params;

    const clienteIndex = clientes.findIndex(cliente => cliente.id === id);

    if (clienteIndex === -1){
        return res.status(404).json({
            estatus: 'conexion fallida',
            mensaje: 'usuario no encontrado'

        });
    }


    clientes.splice(clienteIndex, 1);

    res.status(200).json({
        estatus: 'conexion exitosa',
        datos: {
            clientes: clientes
        }

    });

}

const actualizarCliente = (req, res) => {

    const { id } = req.params;

    //Encontrar cliente
    const clienteIndex = clientes.findIndex(cliente => cliente.id === id)

    //Validar si existe
    if (clienteIndex === -1){
        res.status(404).json({
            estatus: 'conexion fallida',
            mensaje: 'usuario no encontrado'
        });
    }

    //Actualizar cliente
    clientes[clienteIndex] ={
        ...clientes[clienteIndex],
        ...req.body
    }

    //Mandar respuesta
    res.status(200).json({
        estatus: 'conexion exitosa',
        datos: {
            cliente: clientes[clienteIndex],

        }

    });

}









module.exports = {
    obtenerClientes,
    obtenerClientesPorId,
    agregarUsuario,
    borrarCliente,
    actualizarCliente,
    clientes,
    
}

