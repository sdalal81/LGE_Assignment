import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http'
import 'rxjs/Rx'
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'
import { WelcomeComponent } from './home/welcome.component' 


import  { RepositoryListComponent } from './repository/repository-list.component';
import { RepositoryService } from './repository/repository.service';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class ='container-fluid'>
                <a class ='navbar-brand'>{{ pageTitle }}</a>
                <ul class = 'nav navbar-nav'>
                    <li><a [routerLink] = "['Welcome']">Home</a></li>
                    <li><a [routerLink] = "['Repositories']">Repository Details</a></li>
                </ul>
            </div>
        </nav> 
        <div class = 'container'>
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, 
                ROUTER_PROVIDERS,
                RepositoryService]
})

@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
    { path: '/repositories', name: 'Repositories', component: RepositoryListComponent },
])

export class AppComponent{
    pageTitle: string = "LG&E Assignment";
}