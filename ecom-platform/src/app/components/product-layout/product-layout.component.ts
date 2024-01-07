import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.css'],
})
export class ProductLayoutComponent implements OnInit {
  @Input('productItems') productItems!: IProduct[];

  ngOnInit(): void {
    console.log('init');
  }
}
