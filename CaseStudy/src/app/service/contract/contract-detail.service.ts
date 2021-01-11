import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {IContract} from '../../model/contract/IContract';
import {catchError} from 'rxjs/operators';
import {IContractDetail} from '../../model/contract/IContractDetail';

@Injectable({
  providedIn: 'root'
})
export class ContractDetailService {

  private apiServer = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  //get all data
  getAll(): Observable<IContractDetail[]> {
    return this.httpClient.get<IContractDetail[]>(this.apiServer + '/contractDetail/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(customer): Observable<IContractDetail> {
    return this.httpClient.post<IContractDetail>(this.apiServer + '/contractDetail/', JSON.stringify(customer), this.httpOptions)
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
