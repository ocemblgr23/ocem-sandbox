import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { ProductService } from './services/product.service';
import { IProduct } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ecom-platform';

  inputTitle = '';

  productItems: IProduct[] = [];
  filterProductItems: IProduct[] = [];

  constructor(private product_s: ProductService) {}

  ngOnInit(): void {
    this.product_s.getProducts().subscribe((products: IProduct[]) => {
      console.log('products loaded');
      this.productItems = products;
      // this.filterProductsByName();
      this.filterProductItems = products;
    });
  }

  ngAfterViewInit(): void {
    console.log('after content init called');
  }

  onEnter() {
    this.filterProduct();
  }

  filterProduct() {
    if (!this.inputTitle) {
      alert('provide product title');
      this.filterProductItems = this.productItems;
      return;
    }
    // match the title of product
    this.filterProductItems = this.productItems.filter((product) => {
      return product.title
        .toLowerCase()
        .includes(this.inputTitle.toLowerCase());
    });
  }
}
