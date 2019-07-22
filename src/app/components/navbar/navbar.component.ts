import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartLenght = 0;
  isCollapsed = false;
  constructor(private cart: CartService) { }

  ngOnInit() {
    this.cart.currentCartLengthChanged.subscribe(res => this.cartLenght = res);
  }

}
