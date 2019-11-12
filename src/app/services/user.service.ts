import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './../interfaces/usuarios'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "https://projecto-curso.herokuapp.com/v1"
  constructor(private _http:HttpClient) { 

  }
  addUser(data:Usuario){
      return this._http.post(this.baseUrl,data)
  }
  Login(email:string,data:Usuario){
    return this._http.post(this.baseUrl+"/"+email+"/login",data)
      .pipe(map((data:any)=>{
        if(data && !data.error) {
          if(localStorage.getItem("userData")==null)
            localStorage.setItem("userData",JSON.stringify(data.data))
          return data; 
        }
        return data;
      }))
  }
}
