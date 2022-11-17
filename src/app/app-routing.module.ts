import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { UsersComponent } from './users/users.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'users', component: UsersComponent },
  { path: '', component: EventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
