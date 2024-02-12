import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular-Range-Filter';
  products!: Product[];
  ui = {
    min: 0,
    max: 250,
    sort: 'name'
  };

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  toggleSort(attribute: string) {
    if (this.ui.sort === attribute) {
      this.ui.sort = `-${attribute}`;
    } else {
      this.ui.sort = attribute;
    }
    
    this.sortProducts();
  }

  sortProducts() {
    const isDescending = this.ui.sort.startsWith('-');
    const attribute = isDescending ? this.ui.sort.slice(1) : this.ui.sort;

    this.products.sort((a:any, b:any) => {
      if (a[attribute] < b[attribute]) {
        return isDescending ? 1 : -1;
      } else if (a[attribute] > b[attribute]) {
        return isDescending ? -1 : 1;
      } else {
        return 0;
      }
    });
  }
}
