import {OnInit} from 'angular2/core';

import {Component} from 'angular2/core';

import {DashboardService} from './dashboard.service';

@Component({
    selector: 'dashboard',
    template: `
    <h1>Sprints 
        <a href="projects/sprints/create">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
        </a>
    </h1>
    <hr>
    <ul class="list-group">
        <li *ngFor="#sprint of sprints" 
            class="list-group-item">
            <a [href]="'sprints/'+sprint.id"> {{sprint.name}} </a>
        </li>
    </ul>
    `,
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
    sprints = [];
    
    constructor(private _dashboardService: DashboardService) {
        
    }
    
    ngOnInit() {
        this._dashboardService.getSprints()
            .subscribe(
                sprints => { 
                    console.log(sprints);
                    this.sprints = sprints;
                }
            );
    }
} 