import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductandserviceComponent } from './productandservice.component';

describe('ProductandserviceComponent', () => {
  let component: ProductandserviceComponent;
  let fixture: ComponentFixture<ProductandserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductandserviceComponent]
    });
    fixture = TestBed.createComponent(ProductandserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
