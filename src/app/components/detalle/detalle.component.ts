import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import { Personaje } from './../../interfaces/personaje'
import { PersonajeService } from './../../services/personaje.service';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {

  private personaje: Personaje
  constructor(private route: ActivatedRoute, private personajeServices: PersonajeService) { }

  ngOnInit() {
    
    this.personaje = this.personajeServices.getPersonaje(Number(this.route.snapshot.paramMap.get('id')))
    
  }

}
