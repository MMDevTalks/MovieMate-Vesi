import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MovieService } from './movie.service';
import { SharedModule } from 'app/shared/shared.module';
import { SearchComponent } from './search/search.component';
import { AuthService } from 'app/core/service/auth.service';
import { HttpClientModule } from '@angular/common/http';
//import { MovieService } from '@movies/services';
//import { SharedModule } from '@movies/shared';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    MovieService,
    AuthService
  ],
  declarations: [
  ],
  exports: []
})
export class CoreModule { }
