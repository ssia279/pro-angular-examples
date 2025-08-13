import {NgModule} from '@angular/core';
import {ModelModule} from '../model/model-module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {StoreComponent} from './store-component/store-component';
import { CounterDirective } from './counter-directive';
import { CartSummaryComponent } from './cart-summary-component/cart-summary-component';
import {CurrencyPipe} from '@angular/common';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule
  ],
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent],
  exports: [StoreComponent]
})
export class StoreModule { }
