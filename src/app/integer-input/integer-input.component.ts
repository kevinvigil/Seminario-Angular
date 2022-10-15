import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-integer-input',
  templateUrl: './integer-input.component.html',
  styleUrls: ['./integer-input.component.scss']
})
export class IntegerInputComponent implements OnInit {

  constructor() { }

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();
  
  ngOnInit(): void {
  }

  upQuantity(): void{
    if (this.max>this.quantity) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity(): void {
    if (0<this.quantity) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  ChangeQuantity(event: any): void{
    if (this.quantity>this.max) {
      this.quantity = this.max;
    }
    this.quantityChange.emit(this.quantity);
  }
}
