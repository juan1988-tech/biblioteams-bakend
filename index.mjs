import connection  from './database/connection.mjs';
import express from 'express';
import cors  from 'cors'

/*  💡 establecer la conexión al servidor ✨ */
connection();

/*  crear el servidor en node con la base de datos */ 
const app = express();

/*configura el cors*/ 
app.use(cors())

/*crea la conexión http */
const port = 3002;


app.listen(port,()=>{
    console.log(` 🖥 Servidor corriendo en el puerto ${port}`)
})
