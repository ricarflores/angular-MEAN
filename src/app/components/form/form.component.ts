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
      nombre:'',
      descripcion:'',
      foto:'',
      price: ''
    })
  }

  ngOnInit() {
  }
  addPersonaje(){
    const personajeNew: Personaje= {
        nombre:this.checkoutForm.value.nombre,
        desc:this.checkoutForm.value.descripcion,
        foto:this.checkoutForm.value.foto,
        price:this.checkoutForm.value.price
    }
    this.personajeService.addPersonaje(personajeNew)
      .subscribe(
        (data) => { console.log (data)},
        (err) => { console.log(err)},
        () => {  }
      )
  }
  triggerModal(){
     this.modal = true;
  }
}
