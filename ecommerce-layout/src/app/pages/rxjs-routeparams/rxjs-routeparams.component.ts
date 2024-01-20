import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, filter, mergeMap, switchMap } from 'rxjs';
import { API, IUser } from 'src/app/common';

@Component({
  selector: 'app-rxjs-routeparams',
  templateUrl: './rxjs-routeparams.component.html',
  styleUrls: ['./rxjs-routeparams.component.css'],
})
export class RxjsRouteparamsComponent implements OnInit, AfterViewInit {
  user$ = this.activatedRoute.params.pipe(
    mergeMap((params) => this.http.get<IUser>(`${API}/users/${params['id']}`))
  );

  // Live Search
  input = new FormControl('');
  userItems$ = this.input.valueChanges.pipe(
    debounceTime(700),
    switchMap((text) => this.http.get<IUser[]>(`${API}/users?q=${text}`))
  );

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Subscribe to the Activated Route ParamMap and log the value of "id" parameter
  }

  ngAfterViewInit(): void {
    // Approach 1
    // this.input.valueChanges
    //   .pipe(
    //     // filter((text) => (text ? text?.length > 3 : false)),
    //     debounceTime(1000),
    //     switchMap((text) => this.http.get<IUser[]>(`${API}/users?q=${text}`))
    //   )
    //   .subscribe((users) => {
    //     this.users = users;
    //   });
  }
}
