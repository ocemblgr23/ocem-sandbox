import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-demo';

  ngOnInit(): void {
    console.log('App Component');
    console.log('Angular 15 Demo Component');
    console.log('Hi Team , Getting Record Screen By OBS Screen Recorder');
  }
}
