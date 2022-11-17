import { Component, OnInit } from '@angular/core';
import { EventSystemService } from '../event-system.service';
import { ThingToDo } from '../interfaces';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: ThingToDo[] = [];

  constructor(private _service: EventSystemService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers = (): void => {
    this._service.getEvents().subscribe((data: ThingToDo[]) => {
      this.events = data;
      console.log(this.events);
    });
  };
}
