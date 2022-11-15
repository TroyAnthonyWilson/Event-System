export interface User {
  id: Number;
  name: String;
  password: String;
  participations: Participation[];
}
export interface ThingToDo {
  id: Number;
  eventName: String;
  time: Date;
  price: Number;
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
