import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { IProduct } from 'src/app/interface/Product';
import { ICategory } from 'src/app/interface/Category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  categories: ICategory[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (data: any) => {
        this.products = data.docs;
        console.log(data.docs);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  loadCategories() {
    this.categoryService.getCategory().subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Lỗi khi tải danh mục:', error);
      }
    );
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find((c) => c._id === categoryId);
    return category ? category.name : '';
  }

  removeItem(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      console.log('delete thanh cong');
      this.products = this.products.filter((product) => product._id !== id);
    });
  }
}
