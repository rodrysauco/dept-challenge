import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { SpaceService } from '../services/space.service';
import { Launch } from '../models/launch';
import { Rocket } from '../models/rocket';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  launches: Launch[] = [];
  favouritesLaunches: Launch[] = [];

  constructor(
    private spaceService: SpaceService,
    private storageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.favouritesLaunches = this.storageService.getFavourite();
    forkJoin(
      this.spaceService.getLaunches(),
      this.spaceService.getRockets()
    ).subscribe(([launches, rockets]) => {
      this.launches = launches.map(launch => {
        const auxRocket: Rocket = rockets.find(rocket => rocket.rocket_id === launch.rocket.rocket_id);
        const isFavourite = this.favouritesLaunches.find(favourite => favourite.flight_number === launch.flight_number);
        const auxLaunch: Launch = {
          flight_number: launch.flight_number,
          mission_name: launch.mission_name,
          launch_date_unix: launch.launch_date_unix,
          details: launch.details,
          mission_patch: launch.mission_patch,
          isFavourite: isFavourite ? true : false,
          images: auxRocket.flickr_images[0],
          rocket: {
            rocket_id: auxRocket.rocket_id,
            rocket_name: auxRocket.rocket_name,
            active: auxRocket.active,
            cost_per_launch: auxRocket.cost_per_launch,
            company: auxRocket.company
          }
        };
        return auxLaunch;
      });
    })
  }

  handleToggleFavourite(flight_number: number) {
    const launchSelected = this.launches.find(launch => launch.flight_number === flight_number);
    if (launchSelected) {
      launchSelected.isFavourite = !launchSelected.isFavourite;
      this.favouritesLaunches = this.storageService.toggleFavourite(launchSelected);
    }
  }

  handleOpenDetails(flight_number: number) {
    this.router.navigate(['/dashboard/mission', flight_number]);
  }
}
