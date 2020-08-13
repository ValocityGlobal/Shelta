import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly getHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8',
    }),
  };

  constructor(private _http: HttpClient) {}

  getShelters() {
    return this._http.get('/assets/data/shelters.geojson', this.getHttpOptions);
  }
  getFood() {
    return this._http.get('/assets/data/food.geojson', this.getHttpOptions);
  }
}
