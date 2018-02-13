import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { IconComponent } from './components/icon/icon.component';
import { ButtonComponent } from './components/button/button.component';
import { ColorExtractorDirective } from './directives/color-extractor.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MoviePosterComponent, SvgDefinitionsComponent, IconComponent, ButtonComponent, ColorExtractorDirective],
  exports: [MoviePosterComponent, SvgDefinitionsComponent, IconComponent, ButtonComponent, ColorExtractorDirective]
})
export class SharedModule { }
