import { Component } from '@angular/core';
import { Usuario } from "../../classes/usuario"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public nombre: string = "";
  public clave: string = "";
  public error: boolean = false;
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }
  public Logear(){
    let usuario = new Usuario(this.nombre, this.clave);
    if(usuario.VerificarUsuario()){
      this.router.navigateByUrl("/bienvenido");
    }
    else{
      this.error = true;
    }
  }

  public Registrar(){
    this.router.navigateByUrl("/registro");
  }
}
