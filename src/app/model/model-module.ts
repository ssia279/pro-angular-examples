import {NgModule} from '@angular/core';
import {ProductRepository} from './product-repository';
import {StaticDataSource} from './static.datasource';
import {Cart} from './cart';
import {Order} from './order';
import {OrderRepository} from './order-repository';
import {RestDataSource} from './rest-data-source';
import {AuthService} from './auth-service';

@NgModule({
  imports: [],
  providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository,
    RestDataSource, AuthService]
})
export class ModelModule {}
