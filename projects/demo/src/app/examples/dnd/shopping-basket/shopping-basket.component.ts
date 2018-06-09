import {Component} from '@angular/core';

class Product {
  constructor(public name: string, public quantity: number, public cost: number) {}
}


@Component({selector: 'demo-shopping-basket', templateUrl: './shopping-basket.component.html'})
export class ShoppingBasketComponent {
  availableProducts: Array<Product> = [];
  shoppingBasket: Array<Product> = [];

  constructor() {
    this.availableProducts.push(new Product('Blue Shoes', 3, 35));
    this.availableProducts.push(new Product('Good Jacket', 1, 90));
    this.availableProducts.push(new Product('Red Shirt', 5, 12));
    this.availableProducts.push(new Product('Blue Jeans', 4, 60));
  }

  orderedProduct($event: any) {
    const orderedProduct: Product = $event.dragData;
    orderedProduct.quantity--;
  }

  addToBasket($event: any) {
    const newProduct: Product = $event.dragData;
    for (const product of this.shoppingBasket) {
      if (product.name === newProduct.name) {
        product.quantity++;
        return;
      }
    }

    this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost));
    this.shoppingBasket.sort((a: Product, b: Product) => {
      return a.name.localeCompare(b.name);
    });
  }

  totalCost(): number {
    let cost: number = 0;
    for (const product of this.shoppingBasket) {
      cost += (product.cost * product.quantity);
    }

    return cost;
  }
}
