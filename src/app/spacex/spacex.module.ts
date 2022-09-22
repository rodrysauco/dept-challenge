import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpaceXRoutingModule } from './spacex-routing.module';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MissionComponent } from './components/mission/mission.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MissionComponent
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
