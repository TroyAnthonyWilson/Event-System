import { Component, Input, OnInit } from '@angular/core';
import { EventSystemService } from '../event-system.service';
import { Participation, ThingToDo, User } from '../interfaces';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  currentUser: User = {} as User;
  userParticipations: ThingToDo[] = [];

  events: ThingToDo[] = [];

  constructor(private _service: EventSystemService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  selectUser(user: User) {
    this.currentUser = user;
    this.loadUsersEvents(this.currentUser);
    console.table(this.userParticipations);
  }

  loadUsers = (): void => {
    this._service.getEvents().subscribe((data: ThingToDo[]) => {
      this.events = data;
      console.log(this.events);
    });
  };

  loadUsersEvents = (user: User): void => {
    this._service.getEventsByUser(user.id).subscribe((data: ThingToDo[]) => {
      this.userParticipations = data;
    });
  };

  addParticipation = (event: ThingToDo): void => {
    let participation: Participation = {} as Participation;
    this._service.addParticipation(this.currentUser.id, event.id, participation).subscribe((data: Participation) => {
      this.userParticipations.push(event);
    });
  }
}
