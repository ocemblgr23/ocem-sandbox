import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { usersUrl } from 'src/app/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  // Declarative approach to deal with api call

  users$ = this.http.get<IUsers[]>(usersUrl);

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

interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}
