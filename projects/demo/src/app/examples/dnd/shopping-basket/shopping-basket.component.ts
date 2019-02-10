import {Component} from '@angular/core';

interface Product {
  name: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'demo-shopping-basket',
  templateUrl: './shopping-basket.component.html',
})
export class ShoppingBasketComponent {
  availableProducts: Product[] = [
    {
      name: 'Blue Shoes',
      quantity: 3,
      price: 34.99,
    },
    {
      name: 'Good Jacket',
      quantity: 1,
      price: 90,
    },
    {
      name: 'Red Shirt',
      quantity: 5,
      price: 12.59,
    },
    {
      name: 'Blue Jeans',
      quantity: 4,
      price: 59.95,
    },
  ];

  shoppingBasket: Product[] = [];

  constructor() {}

  orderedProduct($event: any) {
    const orderedProduct = $event.dragData as Product;
    orderedProduct.quantity--;
  }

  addToBasket($event: any) {
    const newProduct = $event.dragData as Product;
    for (const product of this.shoppingBasket) {
      if (product.name === newProduct.name) {
        product.quantity++;
        return;
      }
    }

    this.shoppingBasket.push({name: newProduct.name, quantity: 1, price: newProduct.price});
    this.shoppingBasket.sort((a: Product, b: Product) => {
      return a.name.localeCompare(b.name);
    });
  }

  getTotal(): number {
    let cost: number = 0;
    for (const product of this.shoppingBasket) {
      cost += (product.price * product.quantity);
    }

    return cost;
  }
}
