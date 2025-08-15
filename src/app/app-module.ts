import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import {StoreModule} from './store/store-module';
import {RouterModule} from '@angular/router';
import {StoreComponent} from './store/store-component/store-component';
import {CartDetailComponent} from './store/cart-detail-component/cart-detail-component';
import {CheckoutComponent} from './store/checkout-component/checkout-component';
import {StoreFirstGuard} from './store/store-first-guard';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent,
        canActivate: [StoreFirstGuard]},
      { path: "cart", component: CartDetailComponent,
        canActivate: [StoreFirstGuard]},
      { path: "checkout", component: CheckoutComponent,
        canActivate: [StoreFirstGuard]},
      { path: "**", redirectTo: "/store"}
    ])
  ],
  providers: [
    StoreFirstGuard,
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
