import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RooRoutingModule } from './routes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoImagePipe } from './pipes/no-image.pipe';
import { PagesRoutesModule } from './pages/pagesroutes.module'
import { PagesModule } from './pages/pages.module'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RooRoutingModule,
    HttpClientModule,
    CommonModule,
    PagesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
