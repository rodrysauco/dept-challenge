import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Launch } from '../../models/launch';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent {
  @Input() launch: Launch;
  @Output() openDetails = new EventEmitter();
  @Output() toggleFavourite = new EventEmitter();

  constructor() { }

  moreInfo() {
    this.openDetails.emit(this.launch.flight_number);
  }

  onFavClick(event: Event) {
    event.stopImmediatePropagation();
    this.toggleFavourite.emit(this.launch.flight_number);
  }
}
