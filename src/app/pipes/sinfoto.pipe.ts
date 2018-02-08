import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform( value: any[] ): any {
    let urlNoneImage: string = "assets/img/noimage.png";

    if( !value ) {
      urlNoneImage = "assets/img/noimage.png";
    }
    // for (let i = 0; i < value.length; i++) {
    //     if ( value[i].url.length >= 10 ) {
    //       urlImage = value[i].url;
    //     }
    // }
    return ( value.length > 0 ? value[1].url :  urlNoneImage);
  }

}
