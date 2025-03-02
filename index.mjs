import connection  from './database/connection.mjs';
import express from 'express';
import cors  from 'cors';
import bookRouter from './routes/book.mjs';
import userRouter from './routes/user.mjs';

/*  💡 establecer la conexión al servidor ✨ */
connection();

/*  crear el servidor en node con la base de datos */ 
const app = express();

/*configura el cors*/ 
app.use(cors())

/*crea la conexión http */
const port = 3002;


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.listen(port,()=>{
    console.log(` 🖥 Servidor corriendo en el puerto ${port}`)
})

/*probar ruta de prueba a la base de datos*/
app.get('/probando',(req,res)=>{
    console.log('Estoy ejecutando la ruta')

    res.status(200).json({
        status:"succcess",
        message:"ruta de prueba",
    })
})

/*configuración de las rutas para los libros*/
app.use('/api',bookRouter);
app.use('/api',userRouter);
