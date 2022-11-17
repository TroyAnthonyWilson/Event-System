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

  getCurrentUser = (): Observable<User[]> => {
    return this.httpClient.get<User[]>(`${this.backendUrl}/user`);
  };

  getEvents = (): Observable<ThingToDo[]> => {
    return this.httpClient.get<ThingToDo[]>(`${this.backendUrl}/thingtodo`);
  };
}
