import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];

  loadingArtist: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) { 
    this.loadingArtist=true;

    //TODO APUNTA A QUE ESTE id ESTA RELACIONADO CON app-routing.mdule Y tarjetas.ts EN LA LINEA DE ABAJO
    //this.router.navigate(['/artist', artistaId]);
    this.router.params.subscribe(params =>{
      console.log(params['ida']); 
      //this.artista = this.spotify.getArtista(params.id);
      //console.log(this.artista);
      //this.getArtista1(params.id);

      //OJOOOOOOO params.id VIENE A SER CASI LO MISMO QUE params['id']
      this.retardoPrueba(params.ida); //PROBAMOS A RETARDAR PARA QUE NOS SALGA EL LOADING
      this.getTopTracks(params['ida']); //AQUI LLAMAMOS TOPTRACKS
    })
  }

  ngOnInit(): void {
  }

  getArtista(id){///ESTA FUNCION LA HICE YO, MI FALLO FUE QUE VOLVI A HACER ACTIVATEDROUTE 'router'
    this.router.params.subscribe(params =>{

      params = this.spotify.getArtista(id); //ESTA VIENE DEL
      console.log(params);
    })
  }

  getArtista1(id: string){ ///ESTA ES LA FUNCIÓN BUENA

    this.loadingArtist=true; //TAMBIEN PONEMOS EL LOADING AQUI

    this.spotify.getArtista(id)
     .subscribe(artista => { //ESTA VIENE DEL SERVICIO
       console.log(artista);
       this.artista = artista;
       this.loadingArtist=false;
     })
   }

   getTopTracks(id: string){

    this.spotify.getTopTracks(id)
      .subscribe( topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      });

   }

   retardoPrueba(id){ ///FUNCION PARA RETARDAR 1 SEGUNDO LA FUNCION "getArtista"
     var x = setTimeout(() => {this.getArtista1(id)}, 1000);
   }





}
