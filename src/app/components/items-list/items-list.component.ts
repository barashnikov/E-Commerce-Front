import { Item } from './../../domain/item';
import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  data: Item[];
  width = 200;
  constructor(private service: ItemsService) { }

  ngOnInit() {
      this.service.getAllItem().subscribe(
        resp => this.data = resp,
        erreur => console.log('Attention, il y a eu erreur' + erreur));
  }

}
