import {Injectable} from 'angular2/core';
import {Headers, Http, RequestOptions} from 'angular2/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {User, AuthToken} from './auth.models';

@Injectable()
export class AuthService {
    private _url = 'http://127.0.0.1:8000/api/token/';
  
    constructor(private _http: Http) { 
    }
  
    signIn(user: User): Observable<AuthToken> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let requestOptions = new RequestOptions({headers: headers});
        
        let userJson = JSON.stringify(user);
        
        return this._http.post(this._url, userJson, requestOptions)
                         .map(res => res.json());
    }
} 