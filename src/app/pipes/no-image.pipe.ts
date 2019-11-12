import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any 
  {
    //console.log("foto: ",value)
    //console.log("tamaño: ", value.toString().length)
    return (value && value.toString().length > 3) ? value : "/assets/images/noImage.jpg"
    
  }

}
