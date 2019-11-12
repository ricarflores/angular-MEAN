import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Personaje } from "./../interfaces/personaje";
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
  
  private baseUrl: string = "https://personajes.herokuapp.com/v1/personaje"
  constructor(private _http:HttpClient) {
  
  }
  addPersonaje(personaje:Personaje)
  {
    return this._http.post(this.baseUrl,personaje)
  }

  getPersonaje(id){
    return this._http.get(this.baseUrl+"/"+id)
      .pipe(map( personaje => personaje))
  }
  listPersonajes(){
    return this._http.get(this.baseUrl)
      .pipe(map( personaje => personaje))
    //return this.personajes;
  }
  updatePersonaje(personaje:Personaje){
    
  }
  deletePersonaje(_id:string){
    console.log(_id)
    return this._http.delete(this.baseUrl+"/"+_id);
  }
}
