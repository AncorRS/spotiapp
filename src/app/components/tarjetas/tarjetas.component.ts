import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  //VIENE DEL COMPONENTE PADRE "home.component.html" ==> <app-tarjetas [items]="nuevasCanciones"></app-tarjetas>
  @Input() items: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //type, id, artists VIENEN DEL JSON, LO HE PEGADO AL FINAL
  verArtista(item: any){
    let artistaId: string;
    if(item.type=='artist'){ //type PUEDE SER "artist" O "album", SI ES ARTIST EL ID APARECE DIRECTO
      artistaId=item.id;
    }else{
      artistaId=item.artists[0].id; //SI NO ES artist SERA album Y EL ID ESTA DENTRO DEL ARRAY artists EN EL ELEMENTO 0
    }
    console.log(artistaId);
    this.router.navigate(['/artist', artistaId]);
  }
}

/* 
0:
    album_type: "album"
    artists: Array(1)
        0:
            external_urls: {spotify: 'https://open.spotify.com/artist/07YUOmWljBTXwIseAUd9TW'}
            href: "https://api.spotify.com/v1/artists/07YUOmWljBTXwIseAUd9TW"
            id: "07YUOmWljBTXwIseAUd9TW"
            name: "Sebastian Yatra"
            type: "artist"
            uri: "spotify:artist:07YUOmWljBTXwIseAUd9TW"
            [[Prototype]]: Object
        length: 1
        [[Prototype]]: Array(0)
    available_markets: (184) ['AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN', 'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG', 'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES', 'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM', 'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', …]
    external_urls: {spotify: 'https://open.spotify.com/album/4qgRDM8Gyurf5hXV3LBmT8'}
    href: "https://api.spotify.com/v1/albums/4qgRDM8Gyurf5hXV3LBmT8"
    id: "4qgRDM8Gyurf5hXV3LBmT8"
    images: (3) [{…}, {…}, {…}]
    name: "Dharma"
    release_date: "2022-01-28"
    release_date_precision: "day"
    total_tracks: 17
    type: "album"
    uri: "spotify:album:4qgRDM8Gyurf5hXV3LBmT8" 
*/
