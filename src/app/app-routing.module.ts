import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { HomeComponent } from 'app/home/home.component';
import { AuthGuard } from 'app/core/guards/auth.guard';
import { AnonymousGuard } from 'app/core/guards/anonymous.guard';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        canActivate: [AnonymousGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
