import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  signup(payload: any) {
    return this._http.post('/api/users/signup', payload);
  }
  signin(payload: any) {
    return this._http.post('/api/users/signin', payload);
  }
}
