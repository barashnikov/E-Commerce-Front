import { Item } from './../domain/item';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartData: Item[] = [];
  private messageSource = new BehaviorSubject(0);
  currentCartLengthChanged = this.messageSource.asObservable();
  constructor() { }
  addToCart(product: Item): void {
    // Test if the product is already in the cart
    if (this.cartData.indexOf(product) === -1) {
    }
    this.cartData.push(product);
    this.messageSource.next(this.cartData.length);
  }

  getCartProducts(): Item[] {
    return this.cartData;
  }
  getCartLength(): number {
    return this.cartData.length;
  }
  getCartTotalAmount(): number {
    let total = 0;
    this.cartData.forEach(record => total += record.price);
    return total;
  }
  resetCart(): void {
    this.cartData = [];
  }
}
