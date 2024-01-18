import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, map, mergeMap } from 'rxjs';
import { usersUrl } from './common';
import { Button } from 'primeng/button';

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
