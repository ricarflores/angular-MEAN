//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
//componentes
import { SidebarComponent } from './sidebar/sidebar.component'
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ],
    imports:[
        CommonModule,
        RouterModule
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ]
})

export class SharedModule { }