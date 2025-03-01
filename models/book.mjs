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
        type:Number,
        required: true,
    },
    topic_2:{
        type:String,
        required: true,
    },
    dewey_2:{
        type:Number,
        required: true,
    },
    available:{
        type:Boolean,
    },
    description:{
        type:String,
    },
})

export default model("Book",bookSchema,"books");