import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from 'app/login/login.module';
import { AppRoutingModule } from 'app/app-routing.module';
import { HomeModule } from './home/home.module';
// import { MoviePosterComponent } from './movie-poster/movie-poster.component';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    SharedModule,
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    LoginModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
