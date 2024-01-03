import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { IProduct } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ecom-platform';

  productItems: IProduct[] = [];

  constructor(private product_s: ProductService) {}

  ngOnInit(): void {
    this.product_s.getProducts().subscribe((products: IProduct[]) => {
      console.log('products loaded');
      this.productItems = products;
    });
  }
}
