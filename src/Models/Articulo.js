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
        }else{
            this.#autor = valor
        }
    }
    set año(valor) {
        if(isNaN(valor)){
            throw new Error("debe ingresar un numero");
        }else{
        this.#año = valor
    }
    }
    set titulo(valor) {
        if(!valor){
            throw new Error(" debe ingresar un titulo");

        }else{
            this.#titulo = valor
        }
       
    }
    set texto(valor) {
        if(!valor){
            throw new Error(" debe ingresar un texto");
        
        }else{
        this.#texto = valor
        }
    }

    set identificador(valor) {
        if(!valor){
            throw new Error(" debe ingresar un identificador");

        }else{
            this.#titulo = valor
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