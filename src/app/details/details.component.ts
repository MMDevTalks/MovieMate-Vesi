import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'app/core/movie.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Element } from '@angular/compiler';
import { Colors } from 'app/shared/directives/color-extractor.directive';

@Component({
  selector: 'mm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @ViewChild('movieCover') movieCover: ElementRef;
  movie$: Observable<any>;
  constructor(private _route: ActivatedRoute, private _movieService: MovieService) {
  }

  morphBackground(colors: Colors) {
    this.movieCover.nativeElement.style.background = `linear-gradient(to bottom right, ${colors.DarkVibrant} 65%, ${colors.Vibrant})`;
  }

  ngOnInit() {
    this.movie$ = this._route.params.switchMap( params => 
       this._movieService.getMovieById(params.id)
    );
  }

}
