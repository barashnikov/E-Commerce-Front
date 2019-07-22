

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../domain/item';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  // tslint:disable-next-line: no-inferrable-types
  URL: string = 'http://localhost:8080/items';
  constructor(private client: HttpClient) { }

  public getAllItem(): Observable<Item[]> {
    return this.client.get<Item[]>(this.URL);

  }
  public getItemById(id: string): Observable<Item> {
    return this.client.get<Item>(this.URL + '/' + id);
    }
}
