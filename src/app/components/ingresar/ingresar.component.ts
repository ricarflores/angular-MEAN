import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from './../../interfaces/usuarios';
import { UserService }  from './../../services/user.service';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styles: [],
})

export class IngresarComponent implements OnInit {
  private checkUsuarioForm;
  private validate:boolean = false;
  private errores =  [];
  @Input() flagRegistrer:boolean = false;
  constructor(private userService:UserService, private formBuilder: FormBuilder, private router:Router) { 
    this.checkUsuarioForm = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("",Validators.required),
      confirmPassword: new FormControl("", Validators.required),
      username:new FormControl("", Validators.required),
      userType:new FormControl("",Validators.required),
      terminosCondiciones:new FormControl(false)
    });
    //console.log(this.checkUsuarioForm.valid)
    
  }
  ngOnInit() {

  }
  checkInput(inputName:string){
    const element = this.checkUsuarioForm.get(inputName)
    //console.log({[inputName]: !element.pristine && !element.valid })
    return (!element.pristine && !element.valid)
  }
  addUser()
  {
    
    //console.log(this.checkUsuarioForm.controls);
    const { controls } = this.checkUsuarioForm
    this.errores = Object.keys(controls).map(obj => controls[obj]).filter(err=> err["status"] === "INVALID")
    console.log(this.errores)
    if(this.flagRegistrer)
    {
      console.log("user add")
      const userNew:Usuario = {
        email: this.checkUsuarioForm.value.email,
        username: this.checkUsuarioForm.value.username,
        password: this.checkUsuarioForm.value.password,
        userType: this.checkUsuarioForm.value.userType, 
      }
      this.userService.addUser(userNew)
        .subscribe(
          (data) => { 
            console.log (data)

          },
          (err) => { console.log(err)},
          ( ) => {  }
        )
    }
    else
    {
      const loginUser = {
        email: this.checkUsuarioForm.value.email,
        username: this.checkUsuarioForm.value.username,
        password: this.checkUsuarioForm.value.password,
        userType: this.checkUsuarioForm.value.userType, 
      }
      console.log(this.errores)
      this.userService.Login(loginUser.email, loginUser)
        .subscribe(
          (data) =>
          { 
            this.router.navigate(['/'])
          },
          (err) => {console.log(err)},
          () => { }
        )
    }
    this.checkUsuarioForm.reset(); 
  }
}
