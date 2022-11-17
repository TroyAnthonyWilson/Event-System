import { DatePipe, Time } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Participation, ThingToDo } from '../interfaces';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  @Output() eventSave = new EventEmitter<ThingToDo>();
  
  id: number = 1;
  eventName: string = '';
  time: Date = {} as Date;
  price: number = 1;
  location: string = '';
  participations: Participation[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  submit = (): void => {
    this.eventSave.emit({
      id: this.id,
      eventName: this.eventName,
      time: this.time,
      price: this.price,
      location: this.location,
      participations: this.participations
    })
}
}
