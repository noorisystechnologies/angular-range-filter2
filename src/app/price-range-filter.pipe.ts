import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceRangeFilter'
})
export class PriceRangeFilterPipe implements PipeTransform {
  transform(items: any[], min: number, max: number): any[] {
    if (!items) return [];
    return items.filter(item => item.price >= min && item.price <= max);
  }
}
