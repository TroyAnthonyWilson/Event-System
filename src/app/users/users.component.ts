import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventSystemService } from '../event-system.service';
import { User } from '../interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  @Output() currentUser = this.selectedUser;
  userIndex?: Number;
  selectedUser?:User;

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

  changeUser = () => {
    this.currentUser = this.selectedUser;
  }
  
  update(event: User){
    this.selectedUser = event
    this.changeUser();
    console.log(this.currentUser);
    
  }

  // select =() => {
  //   user: User = this.users[this.selected];

  //   this.currentUser.emit({
      
  //   })
  //}
}
