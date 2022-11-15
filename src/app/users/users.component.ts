import { Component, OnInit } from '@angular/core';
import { EventSystemService } from '../event-system.service';
import { User } from '../interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];

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
}
