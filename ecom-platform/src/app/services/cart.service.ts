import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItem = 0;

  constructor() {}

  addToCart(cart: number) {
    this.cartItem += cart;
  }

  getCartItem() {
    return of(this.cartItem);
  }
}
