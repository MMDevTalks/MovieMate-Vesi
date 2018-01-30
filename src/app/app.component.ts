import { Component, OnInit } from '@angular/core'; 
import { MOVIES } from './mocks';
import { MovieService } from './core/movie.service';

@Component({
  selector: 'mm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  movies = [];
  selectedMovie: any = null;
  constructor(private _movieService: MovieService){
  }
  selectMovie(movie){
    this.selectedMovie = movie;
  }
  ngOnInit(){
    this._movieService.getMovies().subscribe(data=>{
      this.movies = data;
    });
  }
}
