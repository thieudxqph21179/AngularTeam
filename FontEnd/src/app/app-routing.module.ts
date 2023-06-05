import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { ProductAddComponent } from './page/product-add/product-add.component';
import { ProductEditComponent } from './page/product-edit/product-edit.component';
import { WebsiteLayoutComponent } from './layout/website-layout/website-layout.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { ProductsPageComponent } from './pages/client/products-page/products-page.component';
import { ProductComponent } from './pages/client/product/product.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'product', pathMatch: 'full' },
      { path: 'product', component: ProductListComponent },
      { path: 'product/add', component: ProductAddComponent },
      { path: 'product/:id/edit', component: ProductEditComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminLayoutComponent },
    ],
  },
  {
    path: "", component: WebsiteLayoutComponent, children: [
      { path: "", component: HomePageComponent },
      { path: "products", component: ProductsPageComponent },
      { path: "product/:id", component: ProductComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
