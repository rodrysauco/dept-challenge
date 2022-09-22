import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Launch } from './spacex/models/launch';
import { Rocket } from './spacex/models/rocket';

@Injectable({
  providedIn: 'root'
})
export class EmpireService {
  BASE_URL = 'https://api.spacexdata.com/v3/';
  favouriteLaunches: Launch[] = [];

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

  setFavourite(launch: Launch) {
    this.favouriteLaunches.push(launch)
    localStorage.setItem('Launches', JSON.stringify(this.favouriteLaunches));
  }

  getFavourite() {
    const launches = localStorage.getItem('Launches');
    this.favouriteLaunches = launches ? JSON.parse(launches) : [];
    return this.favouriteLaunches;
  }

}
