import { Component } from '@angular/core';
import { Cart } from '../../model/cart';

@Component({
  selector: 'app-cart-detail-component',
  standalone: false,
  templateUrl: './cart-detail-component.html',
  styleUrl: './cart-detail-component.css'
})
export class CartDetailComponent {
  constructor(public cart: Cart) {
  }
}
