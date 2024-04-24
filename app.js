const express = require('express');

const clientesRouter = require('./routes/clientes')
const empleadosRouter = require('./routes/empleados')
const mascotasRouter = require('./routes/mascotas')
const adopcionRouter = require('./routes/adopcion')
const servicioCastracionRouter = require('./routes/servicioCastracion')


const app = express();

app.use(express.json());

//Routes

app.use('/api/v1/clientes', clientesRouter)
app.use('/api/v1/empleados', empleadosRouter)
app.use('/api/v1/mascotas', mascotasRouter)
app.use('/api/v1/adopcion', adopcionRouter)
app.use('/api/v1/servicioCastracion', servicioCastracionRouter)







app.listen(8080, () => {
    console.log('Conectado');

});