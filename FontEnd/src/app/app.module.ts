import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from  '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
<<<<<<< HEAD
import { ProductAddComponent } from './page/product-add/product-add.component';
import { ProductEditComponent } from './page/product-edit/product-edit.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { ProductService } from './services/product.service';
=======
import { WebsiteLayoutComponent } from './layout/website-layout/website-layout.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { ProductsPageComponent } from './pages/client/products-page/products-page.component';
import { ProductComponent } from './pages/client/product/product.component';
>>>>>>> develop

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
<<<<<<< HEAD
    ProductAddComponent,
    ProductEditComponent,
    ProductListComponent
=======
    WebsiteLayoutComponent,
    HomePageComponent,
    ProductsPageComponent,
    ProductComponent
>>>>>>> develop
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
