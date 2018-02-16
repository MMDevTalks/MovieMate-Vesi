import { Component, OnInit, Input, Output, EventEmitter, HostBinding} from '@angular/core';

@Component({
  selector: 'mm-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit {
  @Input() movie:any = {};
  @Output() selectMovie: EventEmitter<any> = new EventEmitter();
  @Output() movieDetailsShown: EventEmitter<any> = new EventEmitter();
  @HostBinding('class.movie-poster--active') @Input() isSelected = false;
  constructor() { }

  ngOnInit() {
  }
  clickMoviePoster(event: Event, movie, doNotPropagate?: boolean) {
    if (doNotPropagate) {
      event.stopPropagation();
    }
    this.selectMovie.emit(movie);
  }
  showMovieDetails(movie: any){
    this.movieDetailsShown.emit(movie);
  }
}
