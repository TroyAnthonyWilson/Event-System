import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EventsComponent } from './events/events.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NgFor } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    UsersComponent,
    UserDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgFor

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
