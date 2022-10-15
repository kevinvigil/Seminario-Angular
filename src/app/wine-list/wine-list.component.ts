import { Component, OnInit } from '@angular/core';
import { WineCartService } from '../wine-cart.service';
import { WineDataService } from '../wine-data.service';
import { Wine } from './Wine';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})

export class WineListComponent implements OnInit {

  wines: Wine[] = [];

  toBuy!: Wine[];
  constructor(private cart: WineCartService, 
    private WineData: WineDataService) { 
    cart.toBuy.subscribe(ob => this.toBuy = ob);
  }

  ngOnInit(): void {
    this.WineData.getAll()
    .subscribe(w => this.wines = w);
  }

  addToCart(wine: Wine):void{
    if (wine.quantity>0) {
      this.cart.addToCart(wine);
      wine.stock -= wine.quantity;
      wine.quantity =0;
    }
  }
}