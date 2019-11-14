//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ComponentsModule } from './../components/components.module';
import { SharedModule } from './../shared/shared.module';
//pages
import { MainComponent } from './main/main.component';
import { DetalleComponent } from './detalle/detalle.component'
import { CarritoComponent } from './carrito/carrito.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { PagesComponent } from './pages.component';
import { PagesRoutesModule } from './pagesroutes.module'

@NgModule({
    declarations: [
        MainComponent,
        DetalleComponent,
        CarritoComponent,
        DashboardComponent,
        NotfoundpageComponent,
        PagesComponent,
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        PagesRoutesModule,
        SharedModule
    ],
    exports:[
        DetalleComponent,
        MainComponent,
        DashboardComponent,
        NotfoundpageComponent,
        CarritoComponent,
    ],
    providers: [],
    bootstrap: []
  })
  export class PagesModule { }