export interface User {
  id: number;
  name: String;
  password: String;
  participations: Participation[];
}
export interface ThingToDo {
  id: number;
  eventName: String;
  time: Date;
  price: number;
  location: String;
  participations: Participation[];
}
export interface Participation {
  id: number;
  userId: number;
  user: User;
  thingToDoId: number;
  thingToDo: ThingToDo;
}
