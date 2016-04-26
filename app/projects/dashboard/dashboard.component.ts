import {Component} from 'angular2/core';

@Component({
    selector: 'dashboard',
    template: `
    <h1>Current sprints</h1>
    <hr>
    <ul class="list-group">
        <li class="list-group-item">Sprint 1</li>
        <li class="list-group-item">Sprint 2</li>
        <li class="list-group-item">Sprint 3</li>
    </ul>
    `
})
export class DashboardComponent {
} 