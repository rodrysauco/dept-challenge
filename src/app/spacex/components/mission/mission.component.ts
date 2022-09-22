import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpireService } from 'src/app/empire.service';
import { Launch } from '../../models/launch';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.sass']
})
export class MissionComponent implements OnInit {
  launch: Launch;
  flight_number: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private spaceService: EmpireService
  ) {
    this.flight_number = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.spaceService.getLaunch(this.flight_number)
      .subscribe(data => this.launch = data);
  }

}
