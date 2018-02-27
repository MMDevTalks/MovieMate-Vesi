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
import { AnonymousGuard } from 'app/core/guards/anonymous.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'app/core/service/auth.interceptor';
import { create } from 'domain';
import { createStore } from 'app/core/redux';
import { movies } from 'app/core/movie.reducer'
import { Store$, StoreToken } from 'app/core/store$'
//import { MovieService } from '@movies/services';
//import { SharedModule } from '@movies/shared';

export const getStore = () =>{
  return new Store$(createStore(movies, {}));
}
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
    AnonymousGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: accountLoader,
      deps: [AuthService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: StoreToken,
      useFactory: () => {
        return getStore();
      }
    }
  ],
  declarations: [
  ],
  exports: []
})
export class CoreModule { }
