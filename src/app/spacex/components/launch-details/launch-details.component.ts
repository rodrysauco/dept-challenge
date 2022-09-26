import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Launch } from '../../models/launch';
import { SpaceService } from '../../services/space.service';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss']
})
export class LaunchDetailsComponent implements OnInit {
  launch: Launch;
  flight_number: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private spaceService: SpaceService
  ) {
    this.flight_number = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.spaceService.getLaunch(this.flight_number)
      .subscribe(data => this.launch = data);
  }
}
