import { Component, OnInit } from '@angular/core';
import { MovieService } from 'app/core/movie.service';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
