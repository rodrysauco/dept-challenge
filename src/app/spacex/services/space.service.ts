import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from '../models/launch';
import { Rocket } from '../models/rocket';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  BASE_URL = 'https://api.spacexdata.com/v3/';

  constructor(private http: HttpClient) { }

  getLaunch(flight_number): Observable<Launch> {
    return this.http.get<Launch>(`${this.BASE_URL}launches/${flight_number}`)
  }
  
  getLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${this.BASE_URL}launches`);
  }

  getRockets(): Observable<Rocket[]> {
    return this.http.get<Rocket[]>(`${this.BASE_URL}rockets`);
  }
}
