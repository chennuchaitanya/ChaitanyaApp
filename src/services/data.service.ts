import { NotFoundError } from './../app/Common/not-found';
import { AppError } from './../app/Common/appError';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(private url, private http: Http) { }

  get(){
    return this.http.get(this.url)
    .map(response => response.json())
   .catch(this.handleError);
  }

  create(resource){
   return this.http.post(this.url, JSON.stringify(resource))
   .catch(this.handleError);

  }

  remove(id){
    return this.http.delete(this.url + '/' + id)
    .catch(this.handleError);

  }

  update(resource){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({title: 'chaitanya'}))
    .catch(this.handleError);
  }

 private handleError(error: Response)
  {
    if (error.status === 404)
        return Observable.throw(new NotFoundError());
      else
       return Observable.throw(new AppError(error));
  }
}
