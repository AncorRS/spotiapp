import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[]=[];
  loading: boolean;
  //------------------APM-------------
  numeros: any[]=[1,2,3,4,5,6,7,8,9];

  constructor(private spotify: SpotifyService) { 
    //this.loading=true;
  }

  ngOnInit(): void {
  }

  //APM //of ESTA DEPRECADO POR LO VISTO   
  of_prueba(){
    //of(3, 2, 1).subscribe({
    of(this.numeros).subscribe({  
      next: v => console.log(v + " ..."),
      error: e => console.log("error", e),
      complete: () => console.log("We have lift off")
    });
  }

  //APM //of ESTA DEPRECADO POR LO VISTO   
  of_prueba1(){
    of([ this.numeros ]).subscribe({
      next: v => console.log(v),
      error: e => console.log("error", e),
      complete: () => console.log("We have lift off")
    });
  }

  //APM
  from_prueba(){
    from([this.numeros]).subscribe({
    //from([ 1,2,3 ]).subscribe({ 
      next: v => console.log(v + " ..."),
      error: e => console.log("error", e),
      complete: () => console.log("We have lift off")
    });
  }

  buscar(termino: string){
    console.log(termino);
    this.spotify.getArtistas(termino).subscribe((data: any) =>{
      //console.log(data.artists.items);
      //this.artistas=data.artists.items;
      console.log(data);
      this.artistas=data;
      this.loading=false;
    })
  }

  //APM
  buscar1(termino1: string){ //APM
    console.log(termino1);
  }

}
