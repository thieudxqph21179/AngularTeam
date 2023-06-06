import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ProductListComponent } from './pages/admin/product-list/product-list.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';
import { WebsiteLayoutComponent } from './layout/website-layout/website-layout.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { ProductsPageComponent } from './pages/client/products-page/products-page.component';
import { ProductComponent } from './pages/client/product/product.component';
import { CategoryListComponent } from './pages/admin/category-list/category-list.component';
import { CategoryAddComponent } from './pages/admin/category-add/category-add.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'product', pathMatch: 'full' },
      { path: 'product', component: ProductListComponent },
      { path: 'product/add', component: ProductAddComponent },
      { path: 'product/:id/edit', component: ProductEditComponent },
      { path: 'category', component: CategoryListComponent },
      { path: 'category/add', component: CategoryAddComponent },
      
    ],
  },
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'products', component: ProductsPageComponent },
      { path: 'product/:id', component: ProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
