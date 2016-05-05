import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {SignInComponent} from './signin/signin.component';
import {SignedInRouterOutlet} from './common/auth.directive';
import {ProjectsComponent} from './projects/projects.component';

@Component({
    selector: 'ng-scrum',
    templateUrl: 'app/app.html',
    directives: [SignedInRouterOutlet]
})
@RouteConfig([
    { path: '/signin', name: 'SignIn', component: SignInComponent, useAsDefault: true },
    { path: '/projects/...', name: 'Projects', component: ProjectsComponent },
])
export class AppComponent { }
