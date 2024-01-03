import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input('product') item!: IProduct;

  ngOnInit(): void {
    console.log(this.item);
  }
}
