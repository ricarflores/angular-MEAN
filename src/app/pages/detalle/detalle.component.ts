import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Personaje } from "../../interfaces/personaje";
import { PersonajeService } from '../../services/personaje.service';
import { Response } from './../../interfaces/response';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {

  private personajes: Personaje;
  private errorFlag:boolean = false;
  private response: Response;
  private nombre:string;
  private desc:string;
  private foto:string;
  private price:number;
  constructor(private route: ActivatedRoute, private personajeServices: PersonajeService) {

  }
  ngOnInit() {
    this.getPersonaje();
  }
  getPersonaje()
  {
    try {
      console.log(this.route.snapshot.paramMap.get('id'));
      this.personajeServices.getPersonaje(this.route.snapshot.paramMap.get('id'))
        .subscribe(
          (personaje:any) => {
            console.log(personaje);  
            if (personaje && personaje['data']) {
              this.nombre = personaje["data"]["nombre"];
              this.desc = personaje["data"]["desc"];
              this.foto = personaje["data"]["foto"];
              this.price = personaje["data"]["price"]
            }
          },
          error => { 
            console.log("error: ", error);
            this.errorFlag = true;
            this.response = error.error; 
            
          },
          () => {}
        )
    } catch (e) {
      console.log("Error", e)
    }
  }

}
