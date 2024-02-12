import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceRangeFilterPipe } from './price-range-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    PriceRangeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
