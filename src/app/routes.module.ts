import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./components/main/main.component";
import { DetalleComponent } from './components/detalle/detalle.component'
const routes: Routes = [
    {path:'',component:MainComponent},
    {path:'detalles/:id',component:DetalleComponent},
    {path:'**', redirectTo:'/'}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class RooRoutingModule{}