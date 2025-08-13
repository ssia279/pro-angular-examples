import {computed, Injectable, signal, Signal, WritableSignal} from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class Cart {
  private linesSignal: WritableSignal<CartLine[]>;
  public summary: Signal<CartSummary>;

  constructor() {
    this.linesSignal = signal([]);

    this.summary = computed(() => {
      let newSummary = new CartSummary();
      this.linesSignal().forEach(line => {
        newSummary.itemCount += line.quantity;
        newSummary.cartPrice += line.lineTotal;
      });

      return newSummary;
    });
  }

  get lines() : Signal<CartLine[]> {
    return this.linesSignal.asReadonly();
  }

  addLine(product: Product, quantity: number = 1) {
    this.linesSignal.update(linesArray => {
      let updatedLines = [...linesArray];
      let line = updatedLines.find(p => p.product.id == product.id);
      if (line != undefined) {
        line.quantity += quantity;
      } else {
        updatedLines.push(new CartLine(product, quantity));
      }

      return updatedLines;
    });
  }

  updateQuantity(product: Product, quantity: number) {
    this.linesSignal.update(linesArray => {
      let updatedLines = [...linesArray];
      let line = updatedLines.find(p => p.product.id == product.id);
      if (line != undefined) {
        line.quantity = Number(quantity);
      }
      return updatedLines;
      }
    );
  }

  removeLine(id: number) {
    this.linesSignal.update(linesArray => {
      let updatedLines = [...linesArray];
      let index = updatedLines.findIndex(l => l.product.id == id);
      updatedLines.splice(index, 1);

      return updatedLines;
    });
  }

  clear() {
    this.linesSignal.set([]);
  }
}

export class CartLine {
  constructor(public product: Product, public quantity: number) {
  }

  get lineTotal() {
    return this.quantity * (this.product.price ?? 0);
  }
}

export class CartSummary {
  itemCount: number = 0;
  cartPrice: number = 0;
}
