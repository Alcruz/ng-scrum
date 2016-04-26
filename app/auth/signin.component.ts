import {Component} from 'angular2/core'
import {Router} from 'angular2/router'

@Component({
    templateUrl: 'app/auth/signin.component.html',
    selector: 'signin-form'
})
export class SignInComponent {
    
    constructor(private _router: Router){
    }
    
    signIn() {
        // when login succeded
        this._router.navigate(['Projects']);
    }    
} 