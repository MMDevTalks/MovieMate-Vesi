import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MovieService } from './movie.service';
import { SharedModule } from 'app/shared/shared.module';
import { SearchComponent } from './search/search.component';
import { AuthService } from 'app/core/service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { AccountService } from './service/account.service';
import { APP_INITIALIZER } from '@angular/core';
import { accountLoader } from 'app/core/account.loader';
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
    AuthService,
    AuthGuard,
    AccountService,
    {
      provide: APP_INITIALIZER,
      useFactory: accountLoader,
      deps: [AuthService],
      multi: true
    }
  ],
  declarations: [
  ],
  exports: []
})
export class CoreModule { }
