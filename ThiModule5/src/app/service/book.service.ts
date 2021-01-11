import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IBook} from '../model/IBook';
import {ICustomer} from '../model/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiServer = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.apiServer + '/book/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //get by id
  getById(id): Observable<IBook> {
    return this.httpClient.get<IBook>(this.apiServer + '/book/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //create
  create(book): Observable<IBook> {
    return this.httpClient.post<IBook>(this.apiServer + '/book/', JSON.stringify(book), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //update
  update(id, book): Observable<IBook> {
    return this.httpClient.put<IBook>(this.apiServer + '/book/' + id, JSON.stringify(book), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  //delete
  delete(id:number){
    return this.httpClient.delete<IBook>(this.apiServer + '/book/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  searchAll(keyword): Observable<IBook[]>{
    return this.httpClient.get<IBook[]>(this.apiServer + '/book/' + '?id_like=' + keyword, this.httpOptions);
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
