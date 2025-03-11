import validator from 'validator';

/*validar campos de texto en el validador*/
const validateString = (parameter,field) =>{
    if(parameter){
        let data = !validator.isEmpty(parameter) &&
        validator.isLength(parameter,{min: 3,max: undefined}) 
        validator.isAlpha(parameter, "es-ES");
        
        if(!data){
            throw new Error(`validacion no superada ${field}`) 
        }
    }
}

/*validar campos de número*/
const validateNumber = (parameter,field) =>{
    if(parameter){
        let number = !validator.isEmpty(parameter) &&
        validator.isNumeric(parameter);

        if(!number){
            throw new Error(`validacion no superda ${field}, debes escribir un numero`)
        }
    }
}

function validateBook(params){
    validateString(params.name,'nombre');
    validateString(params.author,'autor');
    validateString(params.topic_1,'Tema 1');
    validateNumber(params.dewey_1,'Dewey no. 1'); 
    validateString(params.topic_2,'Tema 2');
    validateNumber(params.dewey_2,'Dewey no. 2');
}   

export default validateBook;