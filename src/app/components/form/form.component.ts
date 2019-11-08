import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Personaje } from './../../interfaces/personaje'
import { PersonajeService } from './../../services/personaje.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {
 // private personaje : Personaje["personaje"]
 // private descripcion : Personaje["desc"]
  private checkoutForm
  private modal;
  constructor(private personajeService: PersonajeService, private formBuilder: FormBuilder) { 

    this.checkoutForm = this.formBuilder.group({
      personaje:'',
      descripcion:''
    })
  }

  ngOnInit() {
  }
  addPersonaje(){
    const personajeNew: Personaje={
        personaje:this.checkoutForm.value.personaje,
        desc:this.checkoutForm.value.descripcion
    }
    this.personajeService.addPersonaje(personajeNew)
  }
  triggerModal(){
     this.modal = true;
  }
}
