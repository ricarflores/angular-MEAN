import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PersonajeService } from './../../services/personaje.service'
@Component({
  selector: 'app-productos-dashboard',
  templateUrl: './productos-dashboard.component.html',
  styles: []
})
export class ProductosDashboardComponent implements OnInit {
  private page = 1;
  private pageSize = 4;
  private collectionSize:number;
  @Input() data:any;
  private header:any;
  @Input() pagination:any;
  constructor(private personajeService: PersonajeService) {
   }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.personajeService.listPersonajes()
    .subscribe(
      (products:any) => {
        this.collectionSize = products.data.length;
        this.data = products.data.map((user,i)=>({id: i+1, ...user}))
        this.header = ["#","Nombre","Precio","Foto","Descripcion","Acciones"]
        this.pagination={
          page: this.page,
          pageSize: this.pageSize,
          collectionSize: this.collectionSize
        }
        this.data = {
          data:this.data,
          keys:this.header
        }
        //console.log(this.data)
      },
      (err) =>{console.log(err)},
      () =>{}
    )
  }
}
