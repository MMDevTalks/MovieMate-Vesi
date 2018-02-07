import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const API_KEY = 'f719b5bbee3a1a55e2276847cda9fb27';

@Injectable()
export class AccountService {

  constructor(private _http: HttpClient) { 
  }

  public getAccount(): Observable<any> {
    return this._http.get('account');
  }

}
