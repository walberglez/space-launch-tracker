import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchScheduleComponent } from './launch-schedule/launch-schedule.component';

const routes: Routes = [
  { path: '**', component: LaunchScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
