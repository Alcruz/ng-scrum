import {Injectable} from 'angular2/core';

import {AuthHttp} from '../../common/auth-http';

import {Observable} from 'rxjs';


@Injectable()
export class DashboardService {
    
    constructor(private _authHttp: AuthHttp) {    
    }
    
    getSprints() : Observable<any> {
      return this._authHttp.get('sprints/')
           .map(x => x.json());
    }
    
}