import { Injectable } from '@angular/core';
import {StaticDataSource} from './static.datasource';
import {Observable} from 'rxjs';
import {Order} from './order';

@Injectable()
export class OrderRepository {

  constructor(private dataSource: StaticDataSource) {
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrders(order);
  }

}
