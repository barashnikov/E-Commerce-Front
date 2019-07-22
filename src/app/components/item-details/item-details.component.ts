import { CartService } from './../../services/cart.service';
import { ItemsService } from './../../services/items.service';
import { Item } from './../../domain/item';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  pageTitle = 'Item Detail';
  item?: Item;
  errorMessage: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private itemserv: ItemsService,
              private cartService: CartService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params.id;
        this.getItem(id);

      });
  }
  getItem(id) {
     this.itemserv.getItemById(id).
                 subscribe(
                   arg => this.item = arg,
                   err => console.log('Attention, il y a eu l\'erreur : ' + err)
          );
  }
  addToCart() {
    this.cartService.addToCart(this.item);

  }
  onBack(): void {
    this.router.navigate(['/list']);
  }
}


