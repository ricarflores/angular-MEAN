import { Injectable } from '@angular/core';
import { Personaje } from "./../interfaces/personaje";
@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
  private personajes : Personaje [] = [
    {
      id: 1,
      personaje: "Tanjiro",
      desc: "Personaje del anime Demon Slayer",
      foto: "/assets/images/Tanjiro.webp"
    },
    {
      id: 2,
      personaje: "Nezuko",
      desc: "Personaje del anime Demon Slayer",
      foto: "/assets/images/nezuko.gif"
    },
    {
      id: 3,
      personaje: "Nezuko",
      desc: "Personaje del anime Demon Slayer",
      foto: "/assets/images/shinobu.gif"
    }
  ]
  constructor() { }

  addPersonaje(personaje:Personaje)
  {
    const id = (this.personajes) ? this.personajes.length : 1
    personaje.id = id;
    this.personajes.push(personaje)
  }

  getPersonaje(id:Personaje["id"]){
    return this.personajes.filter(personaje => personaje['id'] === id)[0]
  }
  listPersonajes():Personaje[]{
    return this.personajes;
  }
  updatePersonaje(personaje:Personaje){
    
  }
  deletePersonaje(id:Personaje["id"]){
    return this.personajes.splice(id-1,id)
  }
}
