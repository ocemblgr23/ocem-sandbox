import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { fakeStoreProductsUrl } from 'src/app/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products$ = this.http.get<IProduct[]>(fakeStoreProductsUrl);

  constructor(private http: HttpClient) {
    // Do stuff
  }

  ngOnInit(): void {
    console.log('Component Called');
  }

  ngOnDestroy(): void {
    console.log('Component remove from DOM.');
  }
}

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}
