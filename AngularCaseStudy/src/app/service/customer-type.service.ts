import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {ICustomerType} from "../model/ICustomerType";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  private apiServer = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ICustomerType[]> {
    return this.httpClient.get<ICustomerType[]>(this.apiServer + '/customerType/')
      .pipe()
  }
}
