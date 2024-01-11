import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-bootstrap';
  value2:any
  value:any
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
        value: new FormControl(32)
    });
}

}
