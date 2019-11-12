import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./pages/main/main.component";
import { DetalleComponent } from './pages/detalle/detalle.component';
import { RegistroLoginComponent } from './components/registro-login/registro-login.component';
import { UserAuthGuard } from './guards/user-auth.guard'
import { PagesRoutesModule } from './pages/pagesroutes.module'
const routes: Routes = [
    {path:'**', redirectTo:'/'}
    
]
@NgModule({
    imports:[
        RouterModule.forRoot(routes),
        PagesRoutesModule
    ],
    exports:[RouterModule]
})

export class RooRoutingModule{}