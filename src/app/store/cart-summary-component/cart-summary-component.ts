import { Component } from '@angular/core';
import { Cart } from '../../model/cart';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'cart-summary',
  standalone: false,
  templateUrl: './cart-summary-component.html',
  styleUrl: './cart-summary-component.css'
})
export class CartSummaryComponent {
  constructor(public cart: Cart) {
  }

}
