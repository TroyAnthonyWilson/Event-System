import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventFormComponent } from './event-form/event-form.component';

import { EventsComponent } from './events/events.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: '', component: EventsComponent },
  { path: 'manage/users', component: UserManagementComponent },
  { path: 'manage/events', component: EventFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
