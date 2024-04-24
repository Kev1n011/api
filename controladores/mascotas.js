const uuid = require('uuid').v4;


const mascotas = [

    {
        id: uuid(),
        nombre: 'Luna',
        edad: "8",
        sexo: "Hembra",
        color: "Blanco",
        tipo: "Perro",
        raza: "Bulldog",
        peso: "12kg",


    },

    {

        id: uuid(),
        nombre: 'Lalo',
        edad: "5",
        sexo: "Macho",
        color: "Negro",
        tipo: "Perro",
        raza: "Labrador",
        peso: "2kg",
     

    },

]

const obtenerMascotas = (req, res) => {

    res.status(200).json({
        status: 'conexion exitosa',
        datos: {
            mascota: mascotas
        } 
    });
};

const obtenerMascotasPorId = (req,res) => {

    const { id } = req.params;

    const mascota = mascotas.find(mascota => mascota.id === id)

    if (!mascota){
        return res.status(404).json({
            estatus: 'conexion fallida',
            mensaje: 'usuario no encontrado'

        });
    }


    res.status(200).json({
        estatus: 'conexion exitosa',
        datos: {
            mascota: mascota
        }

    });

}

const agregarMascota = (req, res) => {
    const body = req.body;

    const nuevaMascota = {
        id: uuid(),
        nombre: body.nombre,
        edad: body.edad,   
        sexo: body.sexo,
        color: body.color,
        tipo: body.tipo,
        raza: body.raza,
        peso: body.peso,
    }

    mascotas.push(nuevaMascota)
    res.status(201).json({
        estatus: 'Conexion exitosa',
        datos: {
            mascota: nuevaMascota
        }
    })
}

const borrarMascota = (req,res) => {

    const { id } = req.params;

    const mascotaIndex = mascotas.findIndex(mascota => mascota.id === id);

    if (mascotaIndex === -1){
        return res.status(404).json({
            estatus: 'conexion fallida',
            mensaje: 'usuario no encontrado'

        });
    }


    mascotas.splice(mascotaIndex, 1);

    res.status(200).json({
        estatus: 'conexion exitosa',
        datos: {
            mascotas: mascotas
        }

    });

}

const actualizarMascota = (req, res) => {

    const { id } = req.params;

    //Encontrar cliente
    const mascotaIndex = mascotas.findIndex(mascota => mascota.id === id)

    //Validar si existe
    if (mascotaIndex === -1){
        res.status(404).json({
            estatus: 'conexion fallida',
            mensaje: 'usuario no encontrado'
        });
    }

    //Actualizar cliente
    mascotas[mascotaIndex] ={
        ...mascotas[mascotaIndex],
        ...req.body
    }

    //Mandar respuesta
    res.status(200).json({
        estatus: 'conexion exitosa',
        datos: {
            mascota: mascotas[mascotaIndex],
            
        }

    });

}



module.exports = {
   obtenerMascotas,
   obtenerMascotasPorId,
   agregarMascota,
   borrarMascota,
   actualizarMascota,
   mascotas

   
}