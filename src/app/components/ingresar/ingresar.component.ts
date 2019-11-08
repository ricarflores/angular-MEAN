import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Usuario } from './../../interfaces/usuarios';
import { UserService }  from './../../services/user.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styles: []
})
export class IngresarComponent implements OnInit {
  private checkUsuarioForm;
  constructor(private userService:UserService, private formBuilder: FormBuilder) { 
    this.checkUsuarioForm = this.formBuilder.group({
      email: '',
      password: '',
      confirmPassword: '',
      username:'',
      userType:'',
    });
  }
  ngOnInit() {
  }
  addUser(){
    const userNew:Usuario = {
      email: this.checkUsuarioForm.value.email,
      username: this.checkUsuarioForm.value.username,
      password: this.checkUsuarioForm.value.password,
      userType: this.checkUsuarioForm.value.userType, 
    }
    this.userService.addUser(userNew)
    .subscribe(
      (data) => { console.log (data)},
      (err) => { console.log(err)},
      () => {  }
    )
  }
}
