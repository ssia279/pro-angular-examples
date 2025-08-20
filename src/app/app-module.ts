import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import {StoreModule} from './store/store-module';
import {RouterModule} from '@angular/router';
import {StoreComponent} from './store/store-component/store-component';
import {CartDetailComponent} from './store/cart-detail-component/cart-detail-component';
import {CheckoutComponent} from './store/checkout-component/checkout-component';
import {StoreFirstGuard} from './store/store-first-guard';
import {provideHttpClient} from '@angular/common/http';
import { AuthComponent } from './admin/auth-component/auth-component';
import {FormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin-component/admin-component';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: "store", component: StoreComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "cart", component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "checkout", component: CheckoutComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "admin",
        loadChildren: () => import("./admin/admin-module").then(m => m.AdminModule),
        canActivate: [StoreFirstGuard]
      },
      {path: "**", redirectTo: "/store"}
    ]),
    FormsModule
  ],
  providers: [
    StoreFirstGuard,
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
