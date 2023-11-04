import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getApiData(): Observable <any> {
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';

    return this.http.get(apiURL);
  }
}
