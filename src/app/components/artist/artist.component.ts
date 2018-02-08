import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from "../../services/spotify.service";
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
  id:any;
  artistData:any;
  tracksData:any[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public _spotifyService: SpotifyService) {
      // _spotifyService.artists


  }

  ngOnInit() {

    this.id = this.activatedRoute.params
                  .map( params => params['id'] )
                  .subscribe( params => {
                      // console.log( params );
                         this._spotifyService.getArtist( params ).subscribe( data => {
                           // console.log( data )
                           this.artistData = data;
                         })

                         this._spotifyService.getTop( params ).subscribe( data => {
                           // console.log( " ************** " )
                           // console.log( data )
                           this.tracksData = data;
                          })
    });
  }

}
