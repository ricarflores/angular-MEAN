import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common'
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FormComponent } from './components/form/form.component';
import { MainComponent } from './components/main/main.component'
import { DetalleComponent } from './components/detalle/detalle.component'
import { RooRoutingModule } from './routes.module';
import { ModalComponent } from './components/modal/modal.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { RegistroLoginComponent } from './components/registro-login/registro-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsuarioComponent,
    FormComponent,
    DetalleComponent,
    MainComponent,
    ModalComponent,
    IngresarComponent,
    RegistroLoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RooRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
