import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerpersonasComponent } from './verpersonas/verpersonas.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonsService } from './services/persons.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomPaginatePipe } from './pipes/custom-paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from './paginator-es';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { RegistradosComponent } from './registrados/registrados.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component'
import { MensajesService } from './services/mensajes.service';

@NgModule({
  declarations: [
    AppComponent,
    VerpersonasComponent,
    HeaderComponent,
    FooterComponent,
    CustomPaginatePipe,
    LoadingComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    RegistradosComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    MensajesService,
    PersonsService,
    {
      provide: MatPaginatorIntl,
      useClass: CustomMatPaginatorIntl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }