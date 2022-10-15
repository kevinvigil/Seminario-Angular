import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Wine } from './wine-list/Wine';

@Injectable({
  providedIn: 'root'
})
export class WineCartService {

  constructor() {}

  private _toBuy: Wine[]=[];
  toBuy: BehaviorSubject<Wine[]> = new BehaviorSubject<Wine[]> ([]);

  addToCart(wine: Wine) {
    let item = this._toBuy.find((tb1) => tb1.name == wine.name) && (this._toBuy.find((tb1) => tb1.type == wine.type));
    if (!(item)) {
      this._toBuy.push({... wine, stock: wine.quantity});
    } else {
      item.stock+= wine.quantity;
    }
    console.log(this._toBuy);
    this.toBuy.next(this._toBuy);
  }
}