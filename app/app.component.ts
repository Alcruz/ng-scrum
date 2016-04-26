import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {SignInComponent} from './auth/signin.component';
import {ProjectsComponent} from './projects/projects.component';

@Component({
    selector: 'ng-scrum',
    templateUrl: 'app/app.html',
    directives: [RouterOutlet]
})
@RouteConfig([
    { path: '/signin', name: 'SignIn', component: SignInComponent, useAsDefault: true },
    { path: '/projects/...', name: 'Projects', component: ProjectsComponent },
])
export class AppComponent { }
