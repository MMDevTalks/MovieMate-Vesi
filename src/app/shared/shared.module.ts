import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { SvgDefinitionsComponent } from '../core/svg-definitions/svg-definitions.component';
import { IconComponent } from './components/icon/icon.component';
import { ButtonComponent } from './components/button/button.component';
import { ColorExtractorDirective } from './directives/color-extractor.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FabComponent } from './components/fab/fab.component';
import { AddToListFormComponent } from './components/add-to-list-form/add-to-list-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MoviePosterComponent, SvgDefinitionsComponent, IconComponent, ButtonComponent, ColorExtractorDirective, 
    SpinnerComponent, FabComponent, AddToListFormComponent],
  exports: [MoviePosterComponent, SvgDefinitionsComponent, IconComponent, ButtonComponent, ColorExtractorDirective, 
    SpinnerComponent, FabComponent, AddToListFormComponent]
})
export class SharedModule { }
