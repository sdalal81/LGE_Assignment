import { Component, OnInit } from "angular2/core"
import { ROUTER_DIRECTIVES } from 'angular2/router'
import { IRepository } from "./RepositoryDetails"
import { RepositoryService } from './repository.service'


@Component({
    templateUrl: 'app/repository/repository-list.component.html',
    styleUrls: ['app/repository/repository-list.component.css'],
})

export class RepositoryListComponent implements OnInit{
    pageTitle: string = "User Repository Deatils";
    userName: string ;
    repositories: IRepository[];
    errorMessage: string;

    constructor(private _repositoryService : RepositoryService){

    }
    
    onGetRepositoryDetailsClicked(): void {
        this._repositoryService.getRepositories(this.userName)
                .subscribe(repositories => this.repositories = repositories,
                error => this.errorMessage = <any>error);
    }

     ngOnInit(): void{
                        
    }
}