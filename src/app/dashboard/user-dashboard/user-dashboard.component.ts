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
  //private data:any;
  //private header:string[];
  @Input() data:any;
  @Input() header:any;
  constructor(private userServices:UserService) {
    console.log("constructo Users")
   }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this.userServices.getUsers()
      .subscribe(
        (usuarios) =>{
          this.collectionSize = usuarios.data.length;
          this.data = usuarios.data.map((user,i)=>({id: i+1, ...user}))
          this.header = ["#","Correo","Nombre de Usuario","Tipo de Usuario","Activo","Acciones"]
          this.data = {
            data:this.data,
            keys:this.header
          }
          console.log(this.data)
        },
        (err) => {console.log(err)},
        () => {}
    )
  }
}
