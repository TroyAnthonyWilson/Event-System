import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: '', component: EventsComponent },
  { path: 'users', component: UserManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
