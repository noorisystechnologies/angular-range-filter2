import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { name: 'A', price: 100 },
    { name: 'B', price: 500 },
    { name: 'C', price: 120 },
    { name: 'D', price: 100 },
    { name: 'E', price: 1.99 },
    { name: 'F', price: 710 },
    { name: 'G', price: 123 },
    { name: 'H', price: 630 },
    { name: 'I', price: 458 },
    { name: 'J', price: 820 }
  ];

  getProducts() {
    return this.products;
  }
}
