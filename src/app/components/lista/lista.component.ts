import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router' 



import { Personaje } from './../../interfaces/personaje';
import { Usuario } from './../../interfaces/usuarios';
import { PersonajeService } from './../../services/personaje.service';
import { UserService } from './../../services/user.service'
import { Navigation } from 'selenium-webdriver';
import { Location } from '@angular/common'
interface Country {
  id?: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit 
{
  @Input() data:any;
  private keys;
  private elementos;
  constructor() 
  {
    
  }

  ngOnInit() {
    this.setData()
    
  }
  setData(){
    this.keys = this.data.keys
    this.elementos = this.data.data
  }

}
