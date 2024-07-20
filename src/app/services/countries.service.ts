import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Countries } from '../models/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  apiUrl = 'https://countries-springboot-production.up.railway.app/api/countries/name';

  constructor(private http: HttpClient) { }

  getCountryByName(name: String): Observable<Countries[]>{
    return this.http.get<Countries[]>(this.apiUrl+`/${name}`);
  }
}
