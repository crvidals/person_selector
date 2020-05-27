import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VercoloresComponent } from './vercolores/vercolores.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { ColorsService } from './services/colors.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomPaginatePipe } from './pipes/custom-paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from './paginator-es';

@NgModule({
  declarations: [
    AppComponent,
    VercoloresComponent,
    HeaderComponent,
    FooterComponent,
    PageErrorComponent,
    CustomPaginatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [
    ColorsService,
    {
      provide: MatPaginatorIntl,
      useClass: CustomMatPaginatorIntl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }