import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUser, usersUrl } from 'src/app/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  // Declarative approach to deal with api call

  users$ = this.http.get<IUser[]>(usersUrl);

  constructor(private http: HttpClient) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Users component initialized');
  }

  ngOnDestroy(): void {
    console.log('Component remove from DOM.');
  }
}
