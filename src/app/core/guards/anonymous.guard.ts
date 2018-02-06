import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/core/service/auth.service';
import { Router } from '@angular/router/';

@Injectable()
export class AnonymousGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._authService.currentAccount$.map(account => {
      if(account){
        this._router.navigate(['/home']);
        return false;
      }
      else{        
        return true;
      }
    });
  }
}
