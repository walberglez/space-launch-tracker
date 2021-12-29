import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchScheduleComponent } from './launch-schedule/launch-schedule.component';

const routes: Routes = [
  { path: '', redirectTo: 'launch-schedule', pathMatch: 'full'},
  { path: 'launch-schedule', component: LaunchScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
