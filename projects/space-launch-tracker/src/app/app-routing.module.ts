import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchScheduleComponent } from './launch-schedule/launch-schedule.component';

const routes: Routes = [
  { path: 'launch-schedule', component: LaunchScheduleComponent },
  { path: '', redirectTo: '/launch-schedule', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
