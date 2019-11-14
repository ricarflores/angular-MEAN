import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: []
})
export class CarritoComponent implements OnInit {
  private data:any;
  private carritoValue:boolean;
  constructor() { 
  }

  ngOnInit() 
  {
    this.setTable()
  }
  setTable(){
    this.data = JSON.parse(localStorage.getItem("Carrito"))
    if(this.data==null|| this.data == undefined || this.data.length === 0){
      this.carritoValue = false;
    }
    else{
      this.carritoValue = true;
      console.log(this.data)
    }
  }
  eliminarCarrito(name:string){
    let data = JSON.parse(localStorage.getItem("Carrito"))
    console.log(data.length)
    if(localStorage.getItem("Carrito")==null || data.length===0){
      this.carritoValue = false;
    }
    else{
      for(let i =0; i<data.length; i++)
      {
        if(data[i].nombre == name)
        {
          let newTotal = parseInt(data[i].compraTotal,10) -1;
          if(newTotal<=0)
          {
            data.splice(i,1)
          }
          else{
            data[i].compraTotal = newTotal
          }
          
        }
      }
      localStorage.removeItem("Carrito");
      localStorage.setItem("Carrito",JSON.stringify(data))
      this.setTable()
    }
    
  }

}
