import { Component, OnInit } from '@angular/core';
import { MovieService } from 'app/core/movie.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movie$: Observable<Array<any>>;
  public selectedMovie: any;

  constructor(private _movieService: MovieService){  }

  selectMovie(movie){
    this.selectedMovie = movie;
  }
  ngOnInit(){
    this.movie$ = this._movieService.getNowPlayingMovies();
  }

  ngOnDestroy(){  }

}
