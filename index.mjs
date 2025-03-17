//import connection  from './database/connection.mjs';
import express from 'express';
import cors  from 'cors';
import bookRouter from './routes/book.mjs';
import userRouter from './routes/user.mjs';
import mongoose from 'mongoose';
import connection from './database/connection.mjs';
/*  💡 establecer la conexión al servidor ✨ */
//connection();

import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://jfrancoh5:Cell1032421402@biblioteams-backend.iger6.mongodb.net/?retryWrites=true&w=majority&appName=biblioteams-backend";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    await mongoose.connect('mongodb+srv://jfrancoh5:Cell1032421402@biblioteams-backend.iger6.mongodb.net/?retryWrites=true&w=majority&appName=biblioteams-backend');
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

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
app.get('/proof',(req,res)=>{
    console.log('Estoy ejecutando la ruta')

    res.status(200).json({
        status:"succcess",
        message:"ruta de prueba",
    })
})

/*configuración de las rutas para los libros*/
app.use('/api/book/',bookRouter);
app.use('/api/user/',userRouter);

/*ver la funcion de validador*/
//console.log(validator)
