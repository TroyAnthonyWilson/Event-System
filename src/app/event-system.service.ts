import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThingToDo, User, Participation } from './interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventSystemService {
  backendUrl: string = 'https://localhost:7102/api';

  constructor(private httpClient: HttpClient) {}

  getUsers = (): Observable<User[]> => {
    return this.httpClient.get<User[]>(`${this.backendUrl}/user`);
  };

  createUser = (user: User): void => {
    console.log('send that shit');
    this.httpClient
      .post<User>(`${this.backendUrl}/User/${user.name}`, user)
      .subscribe((data) => {
        console.log(data);
      });
  };

  updateUser = (user: User): void => {
    this.httpClient
      .put<User>(`${this.backendUrl}/User/${user.id}/${user.name}`, user)
      .subscribe((data) => {
        console.log(data);
      });
  }; //{id}/{name}

  addParticipation = (
    userId: Number,
    thingtodo: Number,
    participation: Participation
  ): Observable<Participation> => {
    return this.httpClient.post<Participation>(
      `${this.backendUrl}/Participation?thingToDoId=${thingtodo}&userId=${userId}`,
      participation
    );
  };

  getEvents = (): Observable<ThingToDo[]> => {
    return this.httpClient.get<ThingToDo[]>(`${this.backendUrl}/thingtodo`);
  };

  addNewEvent = (event: ThingToDo): void => {
    this.httpClient
      .post<ThingToDo>(
        `${this.backendUrl}/ThingToDo/name/${event.eventName}/price/${event.price}/location/${event.location}/date/${event.time}`,
        event
      )
      .subscribe((data) => {
        console.log(data);
      });
  };

  getEventsByUser = (id: Number): Observable<ThingToDo[]> => {
    return this.httpClient.get<ThingToDo[]>(
      `${this.backendUrl}/participation/user/${id}`
    );
  };

  deleteParticipation = (
    userId: number,
    thingToDoId: number
  ): Observable<Participation> => {
    return this.httpClient.delete<Participation>(
      `${this.backendUrl}/Participation/user/${userId}/thingToDo/${thingToDoId}`
    );
  };
}
