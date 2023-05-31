import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortTex'
})
export class ShortTexPipe implements PipeTransform {

  transform(value: string, length:number): string {
    let index;
    if(value.length>length){
      index=value.indexOf(" ",length);
      if(!index)
      index=length
     
    }
    else{
    index=length

    }
    return value.substring(0,index)+'...';
  }

}
