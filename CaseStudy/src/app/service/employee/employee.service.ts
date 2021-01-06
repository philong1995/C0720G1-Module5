import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IEmployee} from '../../model/employee/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServer = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(this.apiServer + '/employee/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //get by id
  getById(id): Observable<IEmployee> {
    return this.httpClient.get<IEmployee>(this.apiServer + '/employee/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //create
  create(employee): Observable<IEmployee> {
    return this.httpClient.post<IEmployee>(this.apiServer + '/employee/', JSON.stringify(employee), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //update
  update(id, employee): Observable<IEmployee> {
    return this.httpClient.put<IEmployee>(this.apiServer + '/employee/' + id, JSON.stringify(employee), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //delete
  delete(id:number){
    return this.httpClient.delete<IEmployee>(this.apiServer + '/employee/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  searchAll(keyword): Observable<IEmployee[]>{
    return this.httpClient.get<IEmployee[]>(this.apiServer + '/employee/' + '?name_like=' + keyword, this.httpOptions);
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
