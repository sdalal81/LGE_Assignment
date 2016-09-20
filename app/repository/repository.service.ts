import { Injectable } from 'angular2/core'
import { IRepository } from './repositoryDetails'
import { Http, Response } from 'angular2/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class RepositoryService {
private _apiBaseUrl = 'https://api.github.com/users/';

    constructor(private _http: Http ) { 

    }

    getRepositories(userName: string): Observable<IRepository[]> {
       var apiUrl = this._apiBaseUrl + userName+ '/repos';
       
       return this._http.get(apiUrl)
       .map((response: Response) => <IRepository[]>response.json())
       .do(data => console.log("All: "+ JSON.stringify(data)))
       .catch(this.handleError)
    }
    
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}