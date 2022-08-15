import { environment } from './../../environments/environment.prod';
import { Items } from './list/list-item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getList(): Observable<Items> {
    return this.http.get<Items>(API);
  }
}
