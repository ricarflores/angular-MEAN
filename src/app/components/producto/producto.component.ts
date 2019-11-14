import { Component, OnInit } from '@angular/core';
import { PersonajeService } from "../../services/personaje.service";
import { Personaje } from "../../interfaces/personaje";
import { Router } from '@angular/router'
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {
  private personajes: Personaje[]
  private checkoutForm
  constructor(private personajeService: PersonajeService, private formBuilder: FormBuilder) {
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
  addToCarrito(personaje:any){
    let itemToCarrito = 
    [
      {
      nombre:personaje.nombre,
      desc: personaje.desc,
      foto: personaje.foto,
      precio : personaje.price,
      compraTotal: 1,
      }
    ]
    if(localStorage.getItem("Carrito")==null)
    {
      if(JSON.parse(localStorage.getItem("Carrito")).length === 0)
        localStorage.removeItem("Carrito")
      
      localStorage.setItem("Carrito",JSON.stringify(itemToCarrito));
    }
    else{
      let items = JSON.parse(localStorage.getItem("Carrito"))
      console.log (items)
      let find = false;
      for(let i =0; i< items.length; i++)
      {
        if(items[i].nombre === itemToCarrito[0].nombre)
        {
          items[i].compraTotal = parseInt(items[0].compraTotal,10) + 1
          find = true
        }
      }

      if(find==false){
        items.push(itemToCarrito[0])
      }
      localStorage.removeItem("Carrito");
      localStorage.setItem("Carrito",JSON.stringify(items))
      
    }
  }
}
