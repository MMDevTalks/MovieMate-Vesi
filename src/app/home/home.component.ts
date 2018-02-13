import { Component, OnInit } from '@angular/core';
import { MovieService } from 'app/core/movie.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Route } from '@angular/router/src/config';
import { Router } from '@angular/router';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movie$: Observable<Array<any>>;
  public selectedMovie: any;

  constructor(private _movieService: MovieService, private _router: Router){  }

  selectMovie(movie){
    this.selectedMovie = movie;
  }

  showMovieDetails(movie){
    this._router.navigate([{ outlets: {'sidebar': `details/${movie.id}` } }])
  }

  ngOnInit(){
    this.movie$ = this._movieService.getNowPlayingMovies();
  }

  ngOnDestroy(){  }

}
