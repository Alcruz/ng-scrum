import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {SignInService} from './signin.service';
import {AppSession} from '../common/app-session.service'

@Component({
    templateUrl: 'app/signin/signin.component.html',
    selector: 'signin-form',
    providers: [SignInService]
})
export class SignInComponent {
    constructor(private _router: Router, 
                private _authService: SignInService,
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