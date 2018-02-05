import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/core/service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private _authServices: AuthService, private _router: Router){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._authServices.currentAccount$.map(account=>{
      if(account){
        return true;
      }
      else{
        this._router.navigate(['/login']);
        return false;
      }
    });
  }
}
