import Articulo from "./Articulo.js"
export default class RegistroDeArticulos{
#articulos

constructor(){
    this.#articulos=[]
}

ingresar(articulo){
    this.#articulos.push(articulo)
    console.log("se ha ingresado el articulo: "+articulo.titulo)
}

eliminar(identificador){
    let bus=this.#articulos.find(p=>p.identificador == identificador.identificador);
    if(!bus){
        throw new Error("no existe un articulo con ese identificador");
    }else{
        console.log(bus.año);
        if(2020 > bus.año){
            throw new Error("no se pueden borrar articulos previos al 2020");
        }else{
            console.log("se ha sacado el elemento "+bus.titulo);
        }
       
    }
}
 
}