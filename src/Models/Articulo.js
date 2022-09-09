 export default class Articulo{
    #identificador
    #titulo
    #autor
    #texto
    #año

    constructor(identificador,autor,año,titulo,texto){
        this.identificador=identificador
        this.autor=autor;
        this.año=año;
        this.titulo=titulo;
        this.texto=texto;
    }

    set autor(valor) {
        if(!valor){
        throw new Error(" debe ingresar un autor");
        }else if(typeof valor != "string"){
            throw new Error(" debe ingresar una cadena de caracteres");
        }else{
            this.#autor = valor
        }
    }
    set año(valor) {
        if(isNaN(valor)){
            throw new Error("debe ingresar un numero");
        }else if(valor<0){
            throw new Error("debe ingresar un numero positivo");
        }else{
        this.#año = valor
    }
    }
    set titulo(valor) {
        if(!valor){
            throw new Error(" debe ingresar un titulo");
        }else if(typeof valor != "string"){
            throw new Error(" debe ingresar una cadena de caracteres");
        }else{
            this.#titulo = valor
        }
       
    }
    set texto(valor) {
        if(!valor){
            throw new Error(" debe ingresar un texto");
        
        }else if(typeof valor != "string"){
            throw new Error("debe ingresar una cadena de caracteres");
        }else if(valor.length>10){
            throw new Error(" los textos no pueden superar los 1000 caracteres");
        }else{
        this.#texto = valor
        }
    }

    set identificador(valor) {
        if(!valor){
            throw new Error(" debe ingresar un identificador");
        }else if(typeof valor != "string"){
            throw new Error(" debe ingresar una cadena de caracteres");
        }
        else{
            this.#identificador = valor
        }
       
    }


    get texto(){
        return this.#texto
    }
    
    get año(){
        return this.#año
    }
    
    get titulo(){
        return this.#titulo
    }
    
    get autor(){
        return this.#autor
    }
    
    get identificador(){
        return this.#identificador
    }
 }