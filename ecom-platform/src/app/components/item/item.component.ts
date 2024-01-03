import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input('product') item!: IProduct;

  defaultQuantity = 1;

  ngOnInit(): void {
    console.log(this.item);
  }

  increase() {
    this.defaultQuantity += 1;
  }

  decrease() {
    if (this.defaultQuantity == 1) {
      alert("Can't decrease");
      return;
    }
    this.defaultQuantity -= 1;
  }
}
