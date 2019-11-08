import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import { Personaje } from "./../../interfaces/personaje";
import { PersonajeService } from './../../services/personaje.service';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {

  private personajes: Personaje
  constructor(private route: ActivatedRoute, private personajeServices: PersonajeService) { 
    
  }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
    try{
        this.personajeServices.getPersonaje(this.route.snapshot.paramMap.get('id'))
                .subscribe((personaje:any)=>{
                  console.log(personaje.data)
                  if(personaje && personaje.data) this.personajes = personaje.data
              })
    }catch(e){
      console.log(e)
    }
    
    //this.personaje = this.personajeServices.getPersonaje(this.route.snapshot.paramMap.get('id'))
    
  }

}
