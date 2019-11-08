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
    this.personajes = personajeService.listPersonajes()
    this.checkoutForm = this.formBuilder.group({
      id:'',
      personaje: '',
      descripcion: ''
    })
  }
  ngOnInit() {

  }
  deletePersonaje(id) {
    this.personajeService.deletePersonaje(id);
  }
  

}
