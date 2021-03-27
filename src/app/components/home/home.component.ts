//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //paises: any[]=[];
  //translations: any[]=[];
  nuevasCanciones: any[]=[];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor(/*private http: HttpClient*/ private spotify: SpotifyService ) { 
    this.loading=true;

    this.spotify.getNewReleases()
    .subscribe((data:any)=>{
      //this.nuevasCanciones=data.albums.items; //==> 'albums/item' es la ruta que llega a item en el JSON
      console.log(data);
      this.nuevasCanciones=data;//PORQUE EN EL "spotify.service" HEMOS USADO LOS PIPE Y MAP
      this.loading=false;
    }, (errorServicio) =>{
      this.loading=false;
      this.error=true;
      console.log(errorServicio);
      this.mensajeError = errorServicio.error.error.message; //VIENE DEL JSON
    }
    );
    
    /*this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( (paises: any) =>{
      this.paises=paises;
      //this.translations=paises['translations'];
      console.log(paises);
      //console.log(this.translations);
    }
    )*/

  }

  ngOnInit(): void {
    //this.spotify.getNewReleases();
  }

}
