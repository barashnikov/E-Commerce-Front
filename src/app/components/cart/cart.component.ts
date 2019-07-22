import { CartService } from './../../services/cart.service';
import { Item } from './../../domain/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  data: Item[];
  totalAmount = 0;
  constructor(private service: CartService) { }

  ngOnInit() {
    this.data = this.service.getCartProducts();
    this.totalAmount = this.service.getCartTotalAmount();
  }
  order() {
    console.log('Your order has been processed....');

  }

}
