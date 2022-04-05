import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' //CON ESTO YA IMPORTA EN EL PROVIDE AUTOMATICAMENTE
})
export class SpotifyService {

  token: string="BQDJhTyboRIHzAuVjdyeBwxIqcbAgFZ0qWm7ZM3JWi6wfSU0PYQyGM1I7tu11uzpS9zwnkmhYUM27ydPXzw";  

  constructor(private http: HttpClient) { 
    console.log("SERVICIO LISTO");
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({ //MIRAR SI EL TOKEN EXPIRÓ, SE RENUEVA CADA 1 HORA
      'Authorization': 'Bearer '+this.token
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20') //limit=20 ES QUE HEMOS LIMITADO EL JSON A 20 ELEMENTOS
    .pipe(map(data =>{

      //return data.albums.items;
      return data['albums'].items; //LO PODEMOS HACER CON CORCHETES Y EL DATA DE ARRIBA SIN EL PARENTESIS NI EL TIPO ":string"

    }));

  }

  getArtistas(termino: string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`) //ACORDARSE DE COMILLAS PLANAS CUANDO SE USE ${}
    .pipe(map(data => {
      return data['artists'].items;
    })); 
  }

  getArtista(id: string){

    return this.getQuery(`artists/${id}`); //////// IMPORTANTE"""""""""""""""""""""""///////////////////////
    //.pipe(map(data => {                  //// NO USAMOS PIPE PORQUE LA INFORMACION YA VIENE COMO LA NECESITO !!!!!!!!!///////
      //return data['artists'].items;
    //})); 
  }

  getTopTracks(id: string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`) //////// IMPORTANTE"""""""""""""""""""""""///////////////////////
    .pipe(map(data => {                  //// NO USAMOS PIPE PORQUE LA INFORMACION YA VIENE COMO LA NECESITO !!!!!!!!!///////
      return data['tracks'];
    })); 
  }

  /////////////////////////////////LAS FUNCIONES ANTES DE HACER LA FUNCION "getQuery" //////////////////////////////////////////
  /*getNewReleases(){

    const headers = new HttpHeaders({ //MIRAR SI EL TOKEN EXPIRÓ, SE RENUEVA CADA 1 HORA
      'Authorization': 'Bearer '+this.token
    });

    //AÑADIMOS RETURN PARA HACER EL SUBSCRIBE ALLÍ DONDE LO LLAMEMOS
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
    .pipe(map(data =>{

      //return data.albums.items;
      return data['albums'].items; //LO PODEMOS HACER CON CORCHETES Y EL DATA DE ARRIBA SIN EL PARENTESIS NI EL TIPO ":string"

    })); //AÑADIMOS PARA QUE NOS REGRESE 20 "?limit=20"
    //.subscribe((data) =>{
      //console.log(data);
    //})
  }

  getArtista(termino: string){
    const headers = new HttpHeaders({ 
      'Authorization': 'Bearer '+this.token
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
    .pipe(map(data => {
      return data['artists'].item;
    })); 
  }*/
}
