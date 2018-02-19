import { Component, OnInit } from '@angular/core';
import { MovieService } from 'app/core/movie.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Route } from '@angular/router/src/config';
import { Router } from '@angular/router';
import { ICreateList } from '../shared/interfaces/icreate-list';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movie$: Observable<Array<any>>;
  public selectedMovie: any;
  public isCollecting: boolean = false;
  public collectedMovies: Array<any> = [];
  public isFormShown = false;

  constructor(private _movieService: MovieService, private _router: Router){  }

  selectMovie(movie){
    if(this.isCollecting){
      if ( this.collectedMovies.indexOf(movie) === -1){
        this.collectedMovies = [...this.collectedMovies, movie];
      }
    }else{
      this.selectedMovie = movie;
    }
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
    this.movie$ = this._movieService.getNowPlayingMovies();
  }

  toggleCollecting(){
    this.isCollecting = !this.isCollecting;
  }
}
