export class Usuario{
    public nombre: string;
    public clave: string;

    constructor(nombre: string, clave: string){
        this.nombre = nombre;
        this.clave = clave;
    }

    public VerificarUsuario(){
       return this.nombre == "root" && this.clave == "root";
    }
}