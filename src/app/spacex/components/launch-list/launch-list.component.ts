import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Launch } from '../../models/launch';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss']
})
export class LaunchListComponent implements OnInit {
  @Input() launches: Launch[] = []
  @Output() openDetails = new EventEmitter();
  @Output() toggleFavourite = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onOpenDetails(flight_number: number) {
    this.openDetails.emit(flight_number);
  }

  onToggleFavourite(flight_number: number) {
    this.toggleFavourite.emit(flight_number);
  }

}
