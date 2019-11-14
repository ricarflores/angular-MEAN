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
  getUsers(){
    return this._http.get(this.baseUrl)
      .pipe(map((data:any)=>{
        if(data){
          return data;
        }
      }))
  }
  deleteUser(id){
    return this._http.delete(this.baseUrl+"/"+id)
      .pipe(map((data:any)=>{
        console.log(data)
        if(data){
          return data;
        }
      }))
  }
  Login(email:string,data:Usuario){
    return this._http.post(this.baseUrl+"/"+email+"/login",data)
      .pipe(map((data:any)=>{
        if(data && !data.error) {
          console.log(data)
          if(localStorage.getItem("userData")==null)
            localStorage.setItem("userData",JSON.stringify(data.data))
          localStorage.setItem("tokenItem", data.token)
          return data; 
        }
        return data;
      }))
  }
}
