import { Component, OnInit } from '@angular/core';
import { Router, Route} from '@angular/router';
import { UserService } from './../../services/user.service';
import { Usuario } from './../../interfaces/usuarios';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  private sessionActive:boolean;
  private session:Usuario;
  constructor(private userService:UserService) { }

  ngOnInit() 
  {

    this.session = JSON.parse(localStorage.getItem("userData")) 
    if(this.session===null){
      this.sessionActive = false;
    }
    else{
      
      console.log(this.session)
      console.log(typeof this.session)
      
      this.sessionActive = true;
    }
  }
  closeSession(){
    localStorage.removeItem("userData");
    this.sessionActive = false;
  }

}
