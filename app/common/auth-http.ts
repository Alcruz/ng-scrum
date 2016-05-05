import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {ConnectionBackend} from 'angular2/http';
import {Headers} from 'angular2/http';
import {Request, RequestOptions, RequestOptionsArgs} from 'angular2/http';
import {Response} from 'angular2/http';
import {Observable} from 'rxjs';

import {AppSession} from './app-session.service';

@Injectable()
export class AuthHttp {
    
    baseUrl = "http://127.0.0.1:8000/api/";
    
    constructor(private _appSession: AppSession, private _http: Http) {
    }
    
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this._http.request(this.baseUrl + url, options);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        let token = this._appSession.getToken();
        
        options = options || {};
        options.headers = options.headers || new Headers();
        options.headers.append('Authorization', `Token ${token}`);
        
        return this._http.get(this.baseUrl + url, options);   
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        let token = this._appSession.getToken();
        
        options = options || {};
        options.headers = options.headers || new Headers();
        options.headers.append('Authorization', `Token ${token}`);
        
        return this._http.post(this.baseUrl + url, body, options);
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this._http.put(this.baseUrl + url, body, options);
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this._http.delete(this.baseUrl + url, options);
    }

    patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this._http.patch(url, body, options);
    }

    head(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this._http.head(url, options);
    }
}