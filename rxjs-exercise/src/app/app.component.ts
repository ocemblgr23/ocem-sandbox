import { Observable } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from 'src/common';
import { EnvironmentInjector, Injectable, inject } from '@angular/core';
import { ProductService } from './services/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rxjs-exercise';
  // Inject top level
  productSrv = inject(ProductService);

  products$ = this.productSrv.getProducts();

  constructor() {}
  // constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('App component is destroyed');
  }
}
