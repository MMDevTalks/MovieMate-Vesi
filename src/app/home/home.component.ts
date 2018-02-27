import { Component, OnInit, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MovieService } from 'app/core/movie.service';
import { Subscription } from 'rxjs/Subscription';
import { Route } from '@angular/router/src/config';
import { Router } from '@angular/router';
import { ICreateList } from '../shared/interfaces/icreate-list';
import { trigger, animate, keyframes, style, transition } from '@angular/animations';
import { popIn } from 'app/shared/animations/pop-in.animation';
import { Store} from 'app/core/redux';
import { StoreToken, Store$ } from 'app/core/store$';
import { Observable } from 'app/core/rx';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ popIn(0.5)],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  shouldAnimate = 'out';
  public homeState$: Observable<Array<any>>;
  public selectedMovie: any;
  public isCollecting: boolean = false;
  public collectedMovies: Array<any> = [];
  public isFormShown = false;
  public loading = false;

  constructor(private _cd: ChangeDetectorRef, 
    private _movieService: MovieService, private _router: Router, @Inject(StoreToken) private _store$: Store$) {  }

  selectMovie(movie){
    // if(this.isCollecting){
    //   if ( this.collectedMovies.indexOf(movie) === -1){
    //     this.collectedMovies = [...this.collectedMovies, movie];
    //   }
    // }else{
    //   this.selectedMovie = movie;
    // }
    this._store$.dispatch({ type: 'SELECT_MOVIE', payload: movie });
  }

  showMovieDetails(movie){
    this._router.navigate([{ outlets: {'sidebar': `details/${movie.id}` } }])
  }
  showForm(){
    this.isFormShown = true;
  }
  createList(creareList: ICreateList){
    this._movieService.createList(creareList).subscribe();
  }
  ngOnInit(){
    //this.movie$ = this._movieService.getNowPlayingMovies();
    // this._store$.subscribe(()=> {
    //   console.log(this._store$.getState());
    //   this.movies = this._store$.getState().movies;
    //   this.loading = this._store$.getState().loading;
    //   this.selectedMovie = this._store$.getState().selectedMovie;
    //   this._cd.markForCheck();
    // })
    this.homeState$ = this._store$.state$.map( homeState => { homeState.movies[0].overview = 'hey hey'; return homeState; });
    this._store$.dispatch({ type: 'GET_MOVIES'});
    this._movieService.getNowPlayingMovies().subscribe(response => {
      this._store$.dispatch({ type: 'GET_MOVIES_SUCCESS', payload: response });
    });
  }

  toggleCollecting(){
    this.isCollecting = !this.isCollecting;
  }

}
