import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./components/main/main.component";
import { DetalleComponent } from './components/detalle/detalle.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { RegistroLoginComponent } from './components/registro-login/registro-login.component';
const routes: Routes = [
    {path:'',component:MainComponent},
    {path:'detalles/:id',component:DetalleComponent},
    {path:'ingresar', component: RegistroLoginComponent},
    {path:'**', redirectTo:'/'}
    
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class RooRoutingModule{}