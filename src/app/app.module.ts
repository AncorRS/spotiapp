import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; //AÑADIMOS HTTPCLIENTMODULE

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
//import { SpotifyService } from './services/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //AÑADIMOS HTTPCLIENTMODULE
    AppRoutingModule
  ],
  providers: [], //DECLARAMOS EL SERVICIO SPOTIFY, COMO TENEMOS "providedIn: 'root'" EN EL DECORADOR DE "spotify.ts" NO HACE FALTA DECLARARLO
  bootstrap: [AppComponent]
})
export class AppModule { }
