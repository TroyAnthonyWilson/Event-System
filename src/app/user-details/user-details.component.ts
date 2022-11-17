import { Component, Input, OnInit } from '@angular/core';
import { EventSystemService } from '../event-system.service';
import { User } from '../interfaces';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User = {} as User;

  constructor() { }

  ngOnInit(): void {
  }
}
