//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component'
import { DashBoardReoutesModule } from './dashboardRoutes.module';
import { SharedModule } from './../shared/shared.module';
import { ComponentsModule } from './../components/components.module';
import { ProductosDashboardComponent } from './productos-dashboard/productos-dashboard.component'
@NgModule({
    declarations: [    
    UserDashboardComponent, 
    ProductosDashboardComponent
    ],
    imports: [
        RouterModule,
        DashBoardReoutesModule,
        SharedModule,
        ComponentsModule
    ],
    exports:[
        UserDashboardComponent
    ],
  })

  export class DashboardModule{}