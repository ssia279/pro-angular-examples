import {NgModule} from '@angular/core';
import {ProductRepository} from './product-repository';
import {StaticDataSource} from './static.datasource';
import {Cart} from './cart';
import {Order} from './order';
import {OrderRepository} from './order-repository';

@NgModule({
  providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository]
})
export class ModelModule {}
