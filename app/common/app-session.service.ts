import {Injectable} from 'angular2/core';

@Injectable()
export class AppSession {
    setToken(accessToken: string) {
        localStorage.setItem('access_token', accessToken);
    }
    
    getToken(): string {
        return localStorage.getItem("access_token");
    }
}