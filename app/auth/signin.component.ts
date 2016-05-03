import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {AuthService} from './auth.service';
import {AppSession} from '../common/app-session.service'

@Component({
    templateUrl: 'app/auth/signin.component.html',
    selector: 'signin-form',
    providers: [AuthService]
})
export class SignInComponent {
    constructor(private _router: Router, 
                private _authService: AuthService,
                private _appSession: AppSession){
    }
    
    signIn(form) {
        this._authService.signIn({
            username: form.value.username,
            password: form.value.password
        }).subscribe( r => {          
            this._appSession.setToken(r.token);
            this._router.navigate(['Projects']);
        }, error => {
            console.log(error);
        });
    }    
} 