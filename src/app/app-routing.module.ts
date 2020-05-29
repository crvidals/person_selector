import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerpersonasComponent } from './verpersonas/verpersonas.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [  
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'persons', component: VerpersonasComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
