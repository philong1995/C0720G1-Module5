import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IService} from '../../model/service/IService';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiServer = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IService[]> {
    return this.httpClient.get<IService[]>(this.apiServer + '/service/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //get by id
  getById(id): Observable<IService> {
    return this.httpClient.get<IService>(this.apiServer + '/service/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //create
  create(service): Observable<IService> {
    return this.httpClient.post<IService>(this.apiServer + '/service/', JSON.stringify(service), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //update
  update(id, service): Observable<IService> {
    return this.httpClient.put<IService>(this.apiServer + '/service/' + id, JSON.stringify(service), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //delete
  delete(id:number){
    return this.httpClient.delete<IService>(this.apiServer + '/service/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
