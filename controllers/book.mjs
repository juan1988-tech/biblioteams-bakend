import { default as Book } from "../models/book.mjs"

const proofBook = (req,res) =>{
    return res.status(200).json({
        status:"success",
        message:"destination proof success"
    })
}

/* funcion de registrar libro 🖋 */
const registerBook = (req,res) =>{
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

    const  savedBook = new Book(params);

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

export { proofBook,registerBook } ;