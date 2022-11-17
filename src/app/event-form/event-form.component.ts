import { DatePipe, Time } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventSystemService } from '../event-system.service';
import { Participation, ThingToDo, User } from '../interfaces';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
 

  id: number = 1;
  eventName: string = '';
  time: Date = {} as Date;
  price: number = 1;
  location: string = '';
  participations: Participation[] = [];
  
  constructor(private _service: EventSystemService) { }

  ngOnInit(): void {
  }



  
  submit = (): void => {
    let eventSave: ThingToDo = {
      id: this.id,
      eventName: this.eventName,
      time: this.time,
      price: this.price,
      location: this.location,
      participations: this.participations
    };
console.log(eventSave);
    alert(`${this.eventName} added successfully!`);
    this._service.addNewEvent(eventSave);
    
}


}
