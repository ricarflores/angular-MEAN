import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FormComponent } from './components/form/form.component';
import { MainComponent } from './components/main/main.component'
import { DetalleComponent } from './components/detalle/detalle.component'
import { RooRoutingModule } from './routes.module';
import { ModalComponent } from './components/modal/modal.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsuarioComponent,
    FormComponent,
    DetalleComponent,
    MainComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RooRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
