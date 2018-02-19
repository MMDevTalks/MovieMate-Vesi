import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/observable/forkJoin';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ICreateList } from '../shared/interfaces/icreate-list';


const API_KEY = 'f719b5bbee3a1a55e2276847cda9fb27';
@Injectable()
export class MovieService {

  constructor(private _http: HttpClient) {   }
  
  getNowPlayingMovies() {
    let params = new HttpParams();
    return this._http.get('movie/now_playing')
    .map((response: any) =>
      response.results
    );
  }

  getMovieById(id: string) {
    return this._http.get(`movie/${id}`);
  }

  addMovieToList(movie: any, listId: number) {
    return this._http
      .post<{ list_id: number }>(`list/${listId}/add_item`, { media_id: movie.id });
  } 

  createList(createList: ICreateList){
    return this._http.post(`list`, {
      name: createList.name,
      description: createList.description,
      language: createList.language
    })
      .switchMap((res: any) =>
        Observable.forkJoin(createList.movies.map(m => this.addMovieToList(m, res.list_id)))
          .mapTo(res.list_id)
      );
  }
}
