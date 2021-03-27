import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if(!images){
      return 'assets/img/noimage.png';
    }

    if(images.length>0){
      return images[0].url; //VIENE DE "search.html" LA RUTA DEL [src] que ahora es [src]="artista.images | noimage"
    }else{
      return 'assets/img/noimage.png';
    }
    return null;
  }

}
