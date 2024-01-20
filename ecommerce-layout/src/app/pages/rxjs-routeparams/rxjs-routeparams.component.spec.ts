import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsRouteparamsComponent } from './rxjs-routeparams.component';

describe('RxjsRouteparamsComponent', () => {
  let component: RxjsRouteparamsComponent;
  let fixture: ComponentFixture<RxjsRouteparamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsRouteparamsComponent]
    });
    fixture = TestBed.createComponent(RxjsRouteparamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
