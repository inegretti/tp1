import Articulo from "./src/Models/Articulo.js"
import RegistroDeArticulos from "./src/Models/RegistroArticulos.js"

let reg= new RegistroDeArticulos();

let art= new Articulo("saa","autor", 2019,"titulo49","texto");
reg.ingresar(art);
let ar2= new Articulo("nnn","autor4", 2022,"titulo47","texto3");
reg.ingresar(ar2);
reg.eliminar(ar2);
