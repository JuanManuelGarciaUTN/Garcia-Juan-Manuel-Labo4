import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "bienvenido", component: BienvenidoComponent},
  {path: "registro", component: RegistroComponent},
  {path: "error", component: ErrorComponent},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


























/*const routes: Routes = [
  {path: "", redirectTo: '/login'},
  {path: "login", component: LoginComponent},
  {path: "bienvenido", component: BienvenidoComponent},
  {path: "error", component: ErrorComponent},
  {path: "**", redirectTo: '/error'}
];*/