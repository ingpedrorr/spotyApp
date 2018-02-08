import { Component } from '@angular/core';
// import {HttpClientModule } from "@angular/common";

import { SpotifyService } from "../../services/spotify.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

term:string;
artists:any[] = [];

  constructor(public _spotify:SpotifyService) {
    // _spotify.getArtist( this.term ).subscribe( data => {
    //   console.log( data )
    // })
 }

/*
* Search artist
*/
 searchArtist() {

   if (this.term.length == 0) {
     return;
   }

   this._spotify.getArtists( this.term ).subscribe( data => {
     // console.log( data )
     //this.artists = data;
   })

 }


}
