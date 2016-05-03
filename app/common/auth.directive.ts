import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';

import {AppSession} from './app-session.service'

@Directive({
  selector: 'router-outlet',
  providers: [AppSession]
})
export class SignedInRouterOutlet extends RouterOutlet {
  publicRoutes: Array<string>;
  signInRouteName = "SignIn"
  private parentRouter: Router;

  constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader,
              _parentRouter: Router, @Attribute('name') nameAttr: string,
              private appSession: AppSession) {
    super(_elementRef, _loader, _parentRouter, nameAttr);

    this.parentRouter = _parentRouter;
    this.publicRoutes = ['signin'];
  }

  activate(instruction: ComponentInstruction) {
    let routeName = instruction.urlPath;
    let token = this.appSession.getToken();
    let isAPublicRoute = this.publicRoutes.find(name => name == routeName);
    
    console.log(this.appSession.getToken());
    console.log(routeName);
    console.log(this.publicRoutes.find(name => name == routeName));
    
    if (!token && !isAPublicRoute) {
      this.parentRouter.navigate([this.signInRouteName]);
    }
    return super.activate(instruction);
  }
}