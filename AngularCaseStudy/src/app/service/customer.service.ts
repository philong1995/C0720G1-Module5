import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {ICustomer} from "../model/ICustomer";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiServer = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }

  //get all data
  getAll(): Observable<ICustomer[]> {
    return this.httpClient.get<ICustomer[]>(this.apiServer + '/customer/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //create
  create(customer): Observable<ICustomer> {
    return this.httpClient.post<ICustomer>(this.apiServer + '/customer/', JSON.stringify(customer), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //update
  update(id, customer): Observable<ICustomer> {
    return this.httpClient.put<ICustomer>(this.apiServer + '/customer/' + id, JSON.stringify(customer), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //delete
  delete(id){
    return this.httpClient.delete<ICustomer>(this.apiServer + '/customer/' + id, this.httpOptions)
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
