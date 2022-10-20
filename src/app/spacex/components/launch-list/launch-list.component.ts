import { Component, DoCheck, EventEmitter, Input, IterableChanges, IterableDiffer, IterableDiffers, OnInit, Output, SimpleChanges } from '@angular/core';
import { Launch } from '../../models/launch';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss']
})
export class LaunchListComponent implements OnInit, DoCheck {
  @Input() launches: Launch[] = [];
  @Output() openDetails = new EventEmitter();
  @Output() toggleFavourite = new EventEmitter();

  pageSize = 6;
  filteredLaunches: Launch[];
  private _diff: IterableDiffer<Launch>;

  constructor(private _iterableDiffers: IterableDiffers) { }

  ngOnInit(): void {
    const offset = ((0 + 1) - 1) * this.pageSize;
    this._diff = this._iterableDiffers.find(this.launches).create();
    this.filterLaunches(this.pageSize, offset);
  }

  ngDoCheck(): void {
    const changes:IterableChanges<Launch> = this._diff.diff(this.launches);
    if(changes) {
      const offset = ((0 + 1) - 1) * this.pageSize;
      this.filterLaunches(this.pageSize, offset);
    }
  }

  onOpenDetails(flight_number: number) {
    this.openDetails.emit(flight_number);
  }

  onToggleFavourite(flight_number: number) {
    this.toggleFavourite.emit(flight_number);
  }

  changePage(event) {
    const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
    this.filteredLaunches = this.launches.slice(offset).slice(0, event.pageSize);
    this.filterLaunches(event.pageSize, offset)
  }

  filterLaunches(pageSize: number, offset: number) {
    this.filteredLaunches = this.launches.slice(offset).slice(0, pageSize);
  }
}
