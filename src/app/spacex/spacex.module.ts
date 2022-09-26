import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SpaceXRoutingModule } from './spacex-routing.module';
import { LaunchListComponent } from './components/launch-list/launch-list.component';
import { LaunchComponent } from './components/launch/launch.component';
import { LaunchDetailsComponent } from './components/launch-details/launch-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LaunchComponent,
    LaunchListComponent,
    LaunchDetailsComponent
  ],
  imports: [
    CommonModule,
    SpaceXRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule
  ]
})
export class SpacexModule { }
