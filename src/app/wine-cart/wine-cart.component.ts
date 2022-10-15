import { Component, OnInit } from '@angular/core';
import { WineCartService } from '../wine-cart.service';
import { Wine } from '../wine-list/Wine';

@Component({
  selector: 'app-wine-cart',
  templateUrl: './wine-cart.component.html',
  styleUrls: ['./wine-cart.component.scss']
})

export class WineCartComponent implements OnInit {

  toBuy!: Wine[];
  constructor(private cart: WineCartService) { 
    cart.toBuy.subscribe(ob => this.toBuy = ob);
  }
  ngOnInit(): void {}
}