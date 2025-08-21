import { Component } from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductRepository} from '../../model/product-repository';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-editor-component',
  standalone: false,
  templateUrl: './product-editor-component.html',
  styleUrl: './product-editor-component.css'
})
export class ProductEditorComponent {
  editing: boolean = false;
  product: Product = new Product();

  constructor(private repository: ProductRepository,
              private router: Router,
              activateRoute: ActivatedRoute) {

    this.editing = activateRoute.snapshot.params["mode"] == "edit";
    if (this.editing) {
      Object.assign(this.product,
        repository.getProduct(activateRoute.snapshot.params["id"]));
    }
  }

  save() {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl("/admin/main/products").then();
  }

}
