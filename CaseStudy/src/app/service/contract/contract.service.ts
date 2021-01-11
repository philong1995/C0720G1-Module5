import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IContract} from '../../model/contract/IContract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private apiServer = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  //get all data
  getAll(): Observable<IContract[]> {
    return this.httpClient.get<IContract[]>(this.apiServer + '/contract/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //get by id
  getById(id): Observable<IContract> {
    return this.httpClient.get<IContract>(this.apiServer + '/contract/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //create
  create(customer): Observable<IContract> {
    return this.httpClient.post<IContract>(this.apiServer + '/contract/', JSON.stringify(customer), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //update
  update(id, customer): Observable<IContract> {
    return this.httpClient.put<IContract>(this.apiServer + '/contract/' + id, JSON.stringify(customer), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //delete
  delete(id:number){
    return this.httpClient.delete<IContract>(this.apiServer + '/contract/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  searchAll(keyword): Observable<IContract[]>{
    return this.httpClient.get<IContract[]>(this.apiServer + '/contract/' + '?name_like=' + keyword, this.httpOptions);
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
