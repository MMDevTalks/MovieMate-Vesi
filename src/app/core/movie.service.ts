import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import { HttpClient, HttpParams } from '@angular/common/http';


const API_KEY = 'f719b5bbee3a1a55e2276847cda9fb27';
@Injectable()
export class MovieService {

  constructor(private _http: HttpClient) {

   }
  
  getNowPlayingMovies() : Observable<any>{
    let params = new HttpParams();
    return this._http.get('movie/now_playing')
    .map((response: any) =>
      response.results
    );
  }
}
