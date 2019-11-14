//NG
import { NgModule }  from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

//Modules
import { DashboardComponent } from './dashboard.component'
import { UserAuthGuard } from './../guards/user-auth.guard'
import { ListaComponent } from '../components/lista/lista.component'
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NotfoundpageComponent } from './../pages/notfoundpage/notfoundpage.component';
import { ProductosDashboardComponent } from './productos-dashboard/productos-dashboard.component'
const dashboardroutes: Routes=[
    {
        path:'dashboard',
        component:DashboardComponent,
        canActivate:[UserAuthGuard],
        children:[
            {path:'users', component:UserDashboardComponent},
            {path:'productos', component:ProductosDashboardComponent},
            {path:'**', component: NotfoundpageComponent}
        ]
    }
]

export const DashBoardReoutesModule = RouterModule.forChild(dashboardroutes)