import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primera-App-Angular-UTN';
  tituloNuevo = "";
  numeroUno:number = 0;
  numeroDos:number = 0;
  resultado:number = 0;

  cambiarTitutlo(){
    this.title = this.tituloNuevo;
    this.tituloNuevo = "";
  };

  sumar(){
    //this.resultado = Number(this.numeroUno) + Number(this.numeroDos);
    this.resultado = this.numeroUno + this.numeroDos;
  }
}
