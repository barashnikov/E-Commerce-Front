

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../domain/item';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  URL: string = 'http://localhost:8080/items';
  constructor(private client: HttpClient) { }

  public getAllItem(): Observable<Item[]> {
    return this.client.get<Item[]>(this.URL);

  }
}
