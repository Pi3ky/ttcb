import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomePagesComponent } from './home-pages/home-pages.component';
import { NewsComponent } from './news/news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { PublicModule } from '../components/public.modules';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    HomePagesComponent,
    NewsComponent,
    AboutUsComponent,
    ProductsComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PublicModule
  ]
})
export class PagesModule { }
