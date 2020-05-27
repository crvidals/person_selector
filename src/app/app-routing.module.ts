import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VercoloresComponent } from './vercolores/vercolores.component';
import { PageErrorComponent } from './page-error/page-error.component';

const routes: Routes = [
  {path: '', component: VercoloresComponent },
  {path: '**', redirectTo: ''}
  //{path: '**', component: PageErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
