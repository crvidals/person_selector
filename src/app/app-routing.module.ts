import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerpersonasComponent } from './verpersonas/verpersonas.component';
import { PageErrorComponent } from './page-error/page-error.component';

const routes: Routes = [
  {path: '', component: VerpersonasComponent },
  {path: '**', redirectTo: ''}
  //{path: '**', component: PageErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
