import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL: string = 'http://localhost:3000/api/customers';


  constructor(private http: HttpClient) {}

  get(): Observable <any> {
    return this.http.get(this.URL);
  }

  save(customer: Customer) {
    return this.http.post(this.URL, customer);
  }
}
