import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { delay, fromEvent, map, mergeMap, tap } from 'rxjs';
import { usersUrl } from './common';
import { Button } from 'primeng/button';

export const API = 'https://jsonplaceholder.typicode.com';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'ecommerce-layout';
  searchQuery = '';

  @ViewChild('loadUser') btn!: ElementRef<HTMLInputElement>;

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    console.log('View Init');

    // nested api call
    this.http
      .get<IPost>(`${API}/posts/66`)
      .pipe(
        tap((data) => console.log(data)),
        mergeMap((post) =>
          this.http
            .get<IUser[]>(`${API}/users?id=${post.userId}`)
            .pipe(delay(2000))
        )
      )
      .subscribe((resp) => {
        console.log(resp);
      });

    fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        mergeMap(() =>
          this.http.get('https://jsonplaceholder.typicode.com/users')
        )
      )
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IUser {
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
