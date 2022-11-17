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

  userParticipationsIds: Number[] = [];

  events: ThingToDo[] = [];

  constructor(private _service: EventSystemService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  selectUser(user: User) {
    this.currentUser = user;
    this.loadUsersEvents(this.currentUser);
  }

  loadUsers = (): void => {
    this._service.getEvents().subscribe((data: ThingToDo[]) => {
      this.events = data;
    });
  };

  loadUsersEvents = (user: User): void => {
    this._service.getEventsByUser(user.id).subscribe((data: ThingToDo[]) => {
      this.userParticipations = data;
      this.getParticipationIds();
    });
  };

  addParticipation = (event: ThingToDo): void => {
    let participation: Participation = {} as Participation;

    this._service
      .addParticipation(this.currentUser.id, event.id, participation)
      .subscribe(() => {
        this.userParticipations.push(event);
        this.loadUsersEvents(this.currentUser);
      });
  };

  deleteParticipation = (event: ThingToDo): void => {
    this._service
      .deleteParticipation(this.currentUser.id, event.id)
      .subscribe(() => {
        this.loadUsersEvents(this.currentUser);
      });
  };

  getParticipationIds = () => {
    let ids: Number[] = [];

    this.userParticipations.forEach((participation) => {
      ids.push(participation.id);
    });
    this.userParticipationsIds = ids;
  };

  getTime = (t: Date): String => {
    let date = new Date(t);
    return `${date.getHours()}:${date.getMinutes()}`;
  };
}
