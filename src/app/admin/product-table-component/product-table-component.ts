import {Component, IterableDiffer, IterableDiffers, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Product} from '../../model/product.model';
import {ProductRepository} from '../../model/product-repository';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-product-table-component',
  standalone: false,
  templateUrl: './product-table-component.html',
  styleUrl: './product-table-component.css'
})
export class ProductTableComponent {
  colsAndRows: string[] = ['id', 'name', 'category', 'price', 'buttons'];
  dataSource: MatTableDataSource<Product>;
  differ: IterableDiffer<Product>;

  constructor(private repository: ProductRepository,
              differs: IterableDiffers) {
    this.differ = differs.find(this.repository.products()).create();
    this.dataSource = new MatTableDataSource<Product>(this.repository.products());
  }

  ngDoCheck() {
    let changes = this.differ?.diff(this.repository.products());
    if (changes != null) {
      this.dataSource.data = this.repository.products();
    }
  }

  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }

  @ViewChild(MatPaginator)
  paginator?: MatPaginator;

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
}
