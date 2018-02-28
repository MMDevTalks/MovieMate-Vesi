import { Component, OnInit, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MovieService } from 'app/core/movie.service';
import { Subscription } from 'rxjs/Subscription';
import { Route } from '@angular/router/src/config';
import { Router } from '@angular/router';
import { ICreateList } from '../shared/interfaces/icreate-list';
import { trigger, animate, keyframes, style, transition } from '@angular/animations';
import { popIn } from 'app/shared/animations/pop-in.animation';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromHome from './home.reducer';
import * as HomeAction from './home.actions';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ popIn(0.5)],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  shouldAnimate = 'out';
  public homeState$: Observable<fromHome.HomeState>;
  public selectedMovie: any;
  public isCollecting: boolean = false;
  public collectedMovies: Array<any> = [];
  public isFormShown = false;
  public loading = false;

  constructor(private _cd: ChangeDetectorRef, 
    private _movieService: MovieService, 
    private _router: Router, 
    private _store: Store<fromHome.State>
  ) {}

  selectMovie(movie){
    this._store.dispatch(new HomeAction.SelectMovie(movie));
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
    this.homeState$ = this._store.select('home');
    this._store.dispatch( new HomeAction.GetMovies());
    this._movieService.getNowPlayingMovies().subscribe(response => {
      this._store.dispatch(new HomeAction.GetMoviesSuccess(response));
    });
  }

  toggleCollecting(){
    this.isCollecting = !this.isCollecting;
  }

}
