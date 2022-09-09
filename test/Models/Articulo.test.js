import Articulo from '../../src/Models/Articulo.js'; 
import RegistroArticulos from '../../src/Models/RegistroArticulos.js'; 
import assert from "assert";
let articulos = new RegistroArticulos() 
describe("Registracion de articulos ",()=>{
    describe("identificador",()=>{
        //la prueba
        describe("si ingreso un identificador vacio",()=>{
        it("lanza error",()=>{
            //let art =new Articulo("","autor", 2019,"titulo49","texto");
            assert.throws(()=>new Articulo("","autor", 2019,"titulo49","texto"));
                        //hayq ue poner la funcion para que tire funcion
        })
        })
        describe("si ingresa algo que no sea un string",()=>{
            //la prueba
            it("lanza error",()=>{
                assert.throws(()=>new Articulo(47,"autor", 2019,"titulo49","texto"));
            })
        })
    })
    describe("autor",()=>{
        describe("si ingresa algo que no sea un string",()=>{
            //la prueba
            it("lanza error",()=>{
                assert.throws(()=>new Articulo("aaa",47, 2019,"titulo49","texto"));
            })
        })
        describe("si no ingresa nada",()=>{
            //la prueba
            it("lanza error",()=>{
                assert.throws(()=>new Articulo("aas","", 2019,"titulo49","texto"));
            })
        })
        })
        
        describe("titulo",()=>{
            describe("si ingresa algo que no sea un string",()=>{
                //la prueba
                it("lanza error",()=>{
                    assert.throws(()=>new Articulo("aaa","ss ", 2019,47,"texto"));
                })
            })
            describe("si no ingresa nada",()=>{
                //la prueba
                it("lanza error",()=>{
                    assert.throws(()=>new Articulo("aas","ss", 2019,"","texto"));
                })
            })
            })

            describe("texto",()=>{
                describe("si ingresa algo que no sea un string",()=>{
                    //la prueba
                    it("lanza error",()=>{
                        assert.throws(()=>new Articulo("aaa","ss ", 2019,"titulo",9));
                    })
                })
                describe("si no ingresa nada",()=>{
                    //la prueba
                    it("lanza error",()=>{
                        assert.throws(()=>new Articulo("aas","ss", 2019,"titulo",""));
                    })
                })

                describe("si ingresa mas de 1000 caracteres(reducido a 10)",()=>{
                    //la prueba
                    it("lanza error",()=>{
                        assert.throws(()=>new Articulo("aas","ss", 2019,"titulo","aaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
                    })
                })

                })
            
                describe("año",()=>{
                    describe("si ingresa algo que no sea un numero",()=>{
                        //la prueba
                        it("lanza error",()=>{
                            assert.throws(()=>new Articulo("aaa","ss ","titulo","texto"));
                        })
                    })
                    describe("si ingresa un numero negativo",()=>{
                        //la prueba
                        it("lanza error",()=>{
                            assert.throws(()=>new Articulo("aas","ss", -2019,"titulo","texto"));
                        })
                    })
                    })


                    describe("Registro Articulos",()=>{
                        const p=new Articulo("aaa","ss ",2019,"titulo","texto");
                        describe("si borrar algo que no esta",()=>{
                            //la prueba
                            it("lanza error",()=>{                        
                                articulos.ingresar(p);
                                assert.throws(()=>articulos.eliminar(p),console.log("no se pueden borrar previos a 2019 "))

                            })
                        })

                        describe("si intenta eliminar algo que no esta en el registro",()=>{
                            //la prueba
                            it("lanza error",()=>{
                                const t=new Articulo("aaa","ss ",2019,"titulo","texto");
                                
                                articulos.ingresar(p);
                                assert.throws(()=>articulos.eliminar(t))

                            })
                        })
                        })
})




