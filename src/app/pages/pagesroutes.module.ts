import { NgModule }  from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { UserAuthGuard } from './../guards/user-auth.guard';
import { DetalleComponent } from './detalle/detalle.component';
import { RegistroLoginComponent } from './../components/registro-login/registro-login.component';
import { MainComponent } from './main/main.component';
import { PagesComponent } from './pages.component';
import { CarritoComponent } from './carrito/carrito.component'

const pagesroutes: Routes =[
    {path:'',
    component:PagesComponent,
    children:[
        {path:'', component:MainComponent},    
        {path:'detalles/:id',component:DetalleComponent, canActivate:[UserAuthGuard]},
        {path:'registro', component:RegistroLoginComponent},
        {path:'carrito', component:CarritoComponent}
    ]
},  
]

export const PagesRoutesModule = RouterModule.forChild(pagesroutes)

/*@NgModule({
    imports: [RouterModule.forChild(pagesroutes)],
    exports: [RouterModule]
})

export class PagesRoutesModule{

}*/