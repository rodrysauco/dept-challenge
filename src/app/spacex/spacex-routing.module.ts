import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MissionComponent } from "./components/mission/mission.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path:'mission/:id',
    component: MissionComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceXRoutingModule { }