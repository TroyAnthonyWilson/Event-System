export type Users = User[]

export interface User {
  Id: Number;
  Name: String;
  Password: String;
  Participations: Participation[];
}
export interface ThingToDo {
  Id: Number;
  EventName: String;
  Time: Date;
  Price: Number;
  Location: String;
  Participations: Participation[];
}
export interface Participation {
  Id: number;
  UserId: number;
  User: User;
  ThingToDoId: number;
  ThingToDo: ThingToDo;
}
