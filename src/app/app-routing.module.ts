import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerpersonasComponent } from './verpersonas/verpersonas.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { RegistradosComponent } from './registrados/registrados.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

const routes: Routes = [  
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'persons/agregarpersona', component: VerpersonasComponent },
  { path: 'persons/registrados', component: RegistradosComponent },
  { path: 'persons/editarpersona/:id', component: EditarUsuarioComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
