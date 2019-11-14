import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajeService } from './../../services/personaje.service'
import { UserService } from './../../services/user.service'
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styles: []
})
export class UserDashboardComponent implements OnInit {
  private page = 1;
  private pageSize = 4;
  private collectionSize:number;
  @Input() data:any;
  private header:any;
  @Input() pagination:any;
  constructor(private userServices:UserService) {

   }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this.userServices.getUsers()
      .subscribe(
        (usuarios) =>{
          this.collectionSize = usuarios.data.length;
          this.data = usuarios.data
                .map((user,i)=>({id: i+1, ...user}))
                .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize)
          this.header = ["#","Correo","Nombre de Usuario","Tipo de Usuario","Activo","Acciones"]
          this.pagination={
            page: this.page,
            pageSize: this.pageSize,
            collectionSize: this.collectionSize
          }
          this.data = {
            data:this.data,
            keys:this.header
          }
          //console.log(this.pagination)
          //console.log(this.data)
        },
        (err) => {console.log(err)},
        () => {}
    )
  }
}
