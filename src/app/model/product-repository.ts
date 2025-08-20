import {computed, Injectable, Signal, signal} from '@angular/core';
import {Product} from './product.model';
import {StaticDataSource} from './static.datasource';
import {RestDataSource} from './rest-data-source';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable()
export class ProductRepository {
  products = signal<Product[]>([]);
  categories: Signal<string[]>;

  constructor(private dataSource: RestDataSource) {
    dataSource.products.subscribe(products => {
      this.products.set(products);
    });
    this.categories = computed(() => {
      return this.products()
        .map(p => p.category ?? "(None)")
        .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }

  getProduct(id: number): Product | undefined {
    return this.products().find(p => p.id == id);
  }

  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      this.dataSource.saveProduct(product).subscribe(p => {
        this.products.update(pdata => [...pdata, p]);
      });
    } else {
      this.dataSource.updateProduct(product).subscribe(p => {
        this.products.update(pdata => {
          let currentData = [...pdata];
          return currentData.splice(currentData.findIndex(p => p.id == product.id), 1, product);
        });
      });
    }
  }

  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(p => {
      this.products.update(pdata => {
        let currentData = [...pdata];
        return currentData.splice(currentData.findIndex(p => p.id == id), 1);
      });
    });
  }
}
