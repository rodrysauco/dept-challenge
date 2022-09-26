import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LaunchDetailsComponent } from "./components/launch-details/launch-details.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path:'mission/:id',
    component: LaunchDetailsComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceXRoutingModule { }