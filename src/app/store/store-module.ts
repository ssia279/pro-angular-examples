import {NgModule} from '@angular/core';
import {ModelModule} from '../model/model-module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, NgModel} from '@angular/forms';
import {StoreComponent} from './store-component/store-component';
import { CounterDirective } from './counter-directive';
import { CartSummaryComponent } from './cart-summary-component/cart-summary-component';
import {CurrencyPipe} from '@angular/common';
import { CartDetailComponent } from './cart-detail-component/cart-detail-component';
import { CheckoutComponent } from './checkout-component/checkout-component';
import {RouterLink, RouterModule} from '@angular/router';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterLink, RouterModule],
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule { }
