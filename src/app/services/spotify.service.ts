import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import "rxjs/add/operator/map";


@Injectable()
export class SpotifyService {
  artists: any[] = [];
  spotifUrl:string = "https://api.spotify.com/v1/";
  spotifToken:string = "**********; // __YOUR TOKEN CHANGE BY YOURS__

  constructor(public http:HttpClient) {
    console.log(' SERVICE PROVIDER IS UP AND RUNNING!!! ');
  }

  getArtists( term: string ) {
    let url = `${ this.spotifUrl }search?query=${ term }&type=artist&limit=20`
    let headers = new HttpHeaders({
      'authorization': `Bearer ${ this.spotifToken }`
    })
    return this.http.get( url, { headers } )
            .map( ( artists: any ) => {
              this.artists = artists.artists.items;
              return this.artists;
            })
  }

  getArtist( id: string ) {
    let url = `${ this.spotifUrl }artists/${ id }`
    let headers = new HttpHeaders({
      'authorization': `Bearer ${ this.spotifToken }`
    })
    return this.http.get( url, { headers } )
            // .map( ( artists: any ) => {
            //   this.artists = artists.artists.items;
            //   return this.artists;
            // })
  }

  getTop( id: string ) {
    let url = `${ this.spotifUrl }artists/${ id }/top-tracks?country=DO`
    let headers = new HttpHeaders({
      'authorization': `Bearer ${ this.spotifToken }`
    })
    return this.http.get( url, { headers } )
               .map( ( songs: any ) => {
                 return songs.tracks;
               })
  }

}
