import {Component} from 'angular2/core';
import {RouterOutlet, RouteConfig} from 'angular2/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {SprintsDetailComponent} from './sprints/sprints-detail.component';
import {SprintCreateComponent} from './sprints/sprint-create.component';

@Component({
    selector: 'projects',
    templateUrl: 'app/projects/projects.component.html',
    directives: [RouterOutlet]
})
@RouteConfig([
    { path: '/dashboard', component: DashboardComponent, useAsDefault: true},
    { path: '/sprints/:id', component: SprintsDetailComponent, },
    { path: '/sprints/create', name: 'SprintCreate', component: SprintCreateComponent }
])
export class ProjectsComponent {
    
} 