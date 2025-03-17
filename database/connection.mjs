import mongoose from "mongoose";

const connection = async () =>{
    try {
        await mongoose.connect('mongodb://localhost:27018/biblioteams-backend');
        console.log('⚡ conexión exitosa a la base de datos ⚡')
    } catch (error) {
        console.log(error);
        throw new Error('No se ha podido coneectar a la base de datos')
    }
}

export default connection;