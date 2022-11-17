import { Component, EventEmitter, OnInit, Output, Type } from '@angular/core';
import { EventSystemService } from '../event-system.service';
import { User } from '../interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  @Output() user = new EventEmitter<User>();
  selectedUser?: User;

  constructor(private _service: EventSystemService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers = (): void => {
    this._service.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);
    });
  };

  changeUser = (user: User) => {
    this.user.emit(user);
  };

  update(event: User) {
    if (typeof event === typeof this.user) {
      this.selectedUser = event;
      this.changeUser(this.selectedUser);
    } else {
      this.selectedUser = undefined;
      console.log(this.selectedUser);
    }
  }
}
