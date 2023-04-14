import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  public nombre: string = "";
  public clave: string = "";
  public claveRepetida: string = "";
  public mensajeDeError: string = "";
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  public Registrar(){
    if(this.clave == "")
    {
      this.mensajeDeError = "Debe Ingresar Una Clave";
    }
    else{
      if(this.clave.length < 8)
      {
        this.mensajeDeError = "La Clave Debe Ser Al Menos 8 Caracteres";
      }
      else{
        if(this.clave != this.claveRepetida){
          this.mensajeDeError = "La Clave Debe Ser Igual En Ambos Campos";
        }
        else{
          if(this.nombre == ""){
            this.mensajeDeError = "Debe Ingresar Un Nombre";
          }
          else{
            this.router.navigateByUrl("/bienvenido");
          }
        }
      }
    }
  }
}
