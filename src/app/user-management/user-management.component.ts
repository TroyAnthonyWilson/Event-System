import { Component, OnInit } from '@angular/core';
import { EventSystemService } from '../event-system.service';
import { Participation, User } from '../interfaces';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  selectedUser: User = {} as User;

  id: number = 0;
  name: String = '';
  password: String = '';
  participations: Participation[] = [] as Participation[];

  submitButtonText: String = 'Add User';
  dropdownValue: User | String = '';

  constructor(private _service: EventSystemService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers = (): void => {
    this._service.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  };

  populateUserForm(u: User) {
    (this.id = u.id), (this.name = u.name), (this.password = u.password);
    this.participations = u.participations;
  }

  updateFormButton() {
    if (this.selectedUser.id < 1) this.submitButtonText = 'Add User';
    else this.submitButtonText = 'Update User';
  }

  selectUser(u: User) {
    if (this.selectedUser !== ({} as User)) this.selectedUser = u;
    this.populateUserForm(this.selectedUser);
    this.updateFormButton();
  }

  submit() {
    if (this.submitButtonText == 'Add User') {
      let user: User = {
        id: this.id,
        name: this.name,
        password: this.password,
        participations: this.participations,
      };
      this._service.createUser(user);

      this.loadUsers();
    }
    else if (this.submitButtonText == 'Update User') {
      let user: User = {
        id: this.id,
        name: this.name,
        password: this.password,
        participations: this.participations,
      };
      this._service.updateUser(user);
    }
  }
}
