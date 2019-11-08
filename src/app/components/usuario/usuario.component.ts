import { Component, OnInit } from '@angular/core';
import { PersonajeService } from "./../../services/personaje.service";
import { Personaje } from "./../../interfaces/personaje";
import { Router } from '@angular/router'
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  private personajes: Personaje[]
  private checkoutForm
  constructor(private personajeService: PersonajeService, private formBuilder: FormBuilder) {
    console.log("constructor");
    this.personajeService.listPersonajes()
      .subscribe((personajes:any)=>{
        if(!personajes.error) this.personajes = personajes.data
      })
  }
  ngOnInit() {

  }
  deletePersonaje(id) {
    //console.log(id);
    this.personajeService.deletePersonaje(id)
      .subscribe(
        ( data ) => { console.log(data) },
        ( err ) => { console.log(err) },
        ( ) => {}
      )
  }
  

}
