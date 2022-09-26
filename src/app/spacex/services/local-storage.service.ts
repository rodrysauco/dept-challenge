import { Injectable } from '@angular/core';
import { Launch } from '../models/launch';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  favouriteLaunches: Launch[] = [];
  
  constructor() { }

  toggleFavourite(launch: Launch) {
    if(launch.isFavourite){
      this.favouriteLaunches.push(launch);
    } else {
      this.favouriteLaunches = this.favouriteLaunches.filter(launches => launches.flight_number !== launch.flight_number);
    }
    localStorage.setItem('launches', JSON.stringify(this.favouriteLaunches));
  }

  getFavourite() {
    const launches = localStorage.getItem('launches');
    this.favouriteLaunches = launches ? JSON.parse(launches) : [];
    return this.favouriteLaunches;
  }
}
