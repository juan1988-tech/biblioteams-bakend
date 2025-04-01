import { default as Book } from "../models/book.mjs";
import validateBook from "../helpers/validator.mjs";

const proofBook = async (req,res) =>{
    return res.status(200).json({
        status:"success",
        message:"destination proof success"
    })
}

/* funcion de registrar libro 🖋 */
const registerBook = async (req,res) =>{
    //recoge los parametros que llegan por la petición
    let params = req.body;

    //comprobar los datos de la peticion

    if(!params.name || !params.author ||!params.publisher ||!params.year){
        console.log('faltan datos por rellenar')
        return res.status(400).json({
            status:"failed",
            message:"faltan datos por rellenar"
        })
    }

    //validación de datos
    validateBook(params)

    const  savedBook =  await new Book(params);

    savedBook.save()
        .then((saved__book)=>{
            if(!saved__book){
                return res.status(400).json({
                    status:"failed",
                    message:"Libro no gaurdado"
                })
            }else{
                return res.status(200).json({
                    status:"success",
                    message:"Libro guardado exitosamente",
                    book: saved__book
                })
            }
        })
        .catch(error=>{
            console.log(error)
        })
}

const listBook = async (req,res) =>{
    let cathalog = await Book.find({}).exec()
    .then((bookList)=>{
        if(!bookList){
            return res.status(400).json({
                status:"failed",
                message: "na hoy libros"
            })
        }
        return res.status(200).json({
            status:"success",
            message: "listado de libros ",
            list: bookList
        })
    })
    .catch((error)=>{
        console.log(error)
    })
}

const oneBook = (req,res) =>{
    //obtener un libro por su url relativa
    const urlBook = req.params.link;

    Book.findOne({link: urlBook})
    .then((oneBook)=>{
        if(!oneBook){
            return res.status(400).json({
                status:"failed",
                message:"lo sentimos, no hemos encontrado tu libro"
            })
        }else{
            return res.status(200).json({
                status:"success",
                book: oneBook
            })
        }
    })
}


const updateBook = async (req,res) =>{
    let bookId = req.params.id;
    
     //recoge los parametros que llegan por la petición
     let params = req.body;

     //comprobar los datos de la peticion
     if(!params.name || !params.author ||!params.publisher ||!params.year ||!params.description){
         console.log('faltan datos por rellenar')
         return res.status(400).json({
             status:"failed",
             message:"faltan datos por rellenar"
         })
     }
 
     //validación de datos para el libro 📕
     validateBook(params);

    Book
        .findOneAndUpdate({_id: bookId},params)
        .then((updatedBook)=>{
            if(!updatedBook){
                return res.status(500).json({
                    status:"error",
                    message:"error al actualizar el libro"
                })
            }

            return res.status(200).json({
                status:"success",
                message:"Libro actualizado",
                updatedBook: updatedBook 
            })
        })   
}

export { proofBook,registerBook,listBook,updateBook,oneBook } ;