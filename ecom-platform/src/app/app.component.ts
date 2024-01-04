import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ProductService } from './services/product.service';
import { IProduct } from './models/product.model';
import { CartService } from './services/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'ecom-platform';

  inputTitle = '';

  randomPic$ = this.getRandom();

  productItems: IProduct[] = [];
  filterProductItems: IProduct[] = [];

  cartItem$ = this.cart_s.getCartItem();

  constructor(
    private product_s: ProductService,
    private cart_s: CartService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.product_s.getProducts().subscribe((products: IProduct[]) => {
      console.log('products loaded');
      this.productItems = products;
      // this.filterProductsByName();
      this.filterProductItems = products;
    });

    this.cart_s.getCartItem().subscribe((cart) => {
      console.log(cart);
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

  updateCart() {
    this.cart_s.addToCart(1);

    this.cartItem$ = this.cart_s.getCartItem();
  }

  ngOnDestroy(): void {
    console.log('destroyed');
  }

  getRandom() {
    return this.http.get<any>('https://dog.ceo/api/breeds/image/random');
  }
}
