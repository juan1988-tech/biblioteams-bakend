import { Schema,model } from "mongoose";

const bookSchema = Schema({
    name:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    },
    year:{
        type:Number,
        required: true,
    },
    topic_1:{
        type:String,
        required: true,
    },
    dewey_1:{
        type:String,
        required: true,
    },
    topic_2:{
        type:String,
        required: true,
    },
    dewey_2:{
        type:String,
        required: true,
    },
    available:{
        type:Boolean
    },
    p1:{
        type:String,  
    },
    p2:{
        type:String,
    },
    p3:{
        type:String,
    },    
    link:{
        type:String
    }
})


const Book = model("Book",bookSchema,"books")

export default Book;