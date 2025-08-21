import {Component, IterableDiffer, IterableDiffers} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Order} from '../../model/order';
import {OrderRepository} from '../../model/order-repository';

@Component({
  selector: 'app-order-table-component',
  standalone: false,
  templateUrl: './order-table-component.html',
  styleUrl: './order-table-component.css'
})
export class OrderTableComponent {
  colsAndRows: string[] = ['name', 'zip', 'cart_p', 'cart_q', 'buttons'];

  dataSource: MatTableDataSource<Order>;
  differ: IterableDiffer<Order>;

  constructor(private repository: OrderRepository,
              differs: IterableDiffers) {
    this.differ = differs.find(this.repository.orders()).create();
    this.dataSource = new MatTableDataSource<Order>(this.repository.orders());
    this.dataSource.filter = "true";
    this.dataSource.filterPredicate = (order, include) => {
      return !order.shipped || include.toString() == "true"
    };
  }

  get includeShipped(): boolean {
    return this.dataSource.filter == "true";
  }

  set includeShipped(include: boolean) {
    this.dataSource.filter = include.toString();
  }

  toggleShipped(order: Order) {
    order.shipped = !order.shipped;
    this.repository.updateOrder(order);
  }

  delete(id: number) {
    this.repository.deleteOrder(id);
  }

  ngDoCheck() {
    let changes = this.differ?.diff(this.repository.orders());
    if (changes != null) {
      this.dataSource.data = this.repository.orders();
    }
  }

}
