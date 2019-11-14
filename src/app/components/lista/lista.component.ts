import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router' 



import { Personaje } from './../../interfaces/personaje';
import { Usuario } from './../../interfaces/usuarios';
import { PersonajeService } from './../../services/personaje.service';
import { UserService } from './../../services/user.service'
import { Navigation } from 'selenium-webdriver';
import { Location } from '@angular/common'


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
  private page;
  private collectionSize;
  private pageSize;
  @Input() pagination:any;
  @Output("eliminarData") sendId:EventEmitter<string> = new EventEmitter();
  constructor(private userServices: UserService) 
  {
    
  }

  ngOnInit() {
    
    this.setData()
    
  }
  setData(){
    this.keys = this.data.keys
    this.elementos = this.data.data;
    console.log(this.elementos)
    
  }
  eliminarData(id:string){
    this.sendId.emit(id)
  }
  

}
