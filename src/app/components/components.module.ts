//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormControl} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoImagePipe } from './../pipes/no-image.pipe'
//components 
import { FormComponent }  from './form/form.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { ListaComponent } from './lista/lista.component';
import { ModalComponent } from './modal/modal.component';
import { RegistroLoginComponent } from './registro-login/registro-login.component';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
    declarations: 
    [
        FormComponent,
        IngresarComponent,
        ListaComponent,
        ModalComponent,
        RegistroLoginComponent,
        ProductoComponent,
        NoImagePipe
        
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule
    ],
    exports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        FormComponent,
        IngresarComponent,
        ListaComponent,
        ModalComponent,
        RegistroLoginComponent,
        ProductoComponent,
    ],
    providers: [],
    bootstrap: []
  })
  export class ComponentsModule { }