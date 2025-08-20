import {Injectable, Signal, signal} from '@angular/core';
import {Observable} from 'rxjs';
import {Order} from './order';
import {RestDataSource} from './rest-data-source';

@Injectable()
export class OrderRepository {
  private ordersSignal = signal<Order[]>([]);
  private loaded: boolean = false;

  constructor(private dataSource: RestDataSource) {
  }

  loadOrders() {
    this.loaded = true;
    this.dataSource.getOrders().subscribe(data => {
      this.ordersSignal.set(data);
    });
  }

  get orders(): Signal<Order[]>  {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.ordersSignal.asReadonly();
  }

  saveOrder(order: Order): Observable<Order> {
    this.loaded = false;
    return this.dataSource.saveOrder(order);
  }

  updateOrder(order: Order) {
    this.dataSource.updateOrder(order).subscribe(order => {
      this.ordersSignal.update(orders => {
        let currentOrders = [...orders];
        currentOrders.splice(currentOrders.findIndex(o => o.id == order.id), 1, order);

        return currentOrders;
      })
    });
  }

  deleteOrder(id: number) {
    this.dataSource.deleteOrder(id).subscribe(order => {
      this.ordersSignal.update(orders => {
        let currentOrders = [...orders];
        currentOrders.splice(currentOrders.findIndex(o => id == o.id), 1);

        return currentOrders;
      });
    });
  }
}
