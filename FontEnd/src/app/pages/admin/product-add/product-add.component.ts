import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroupDirective,
} from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { IProduct } from 'src/app/interface/Product';
import { ICategory } from 'src/app/interface/Category';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    author: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    image: ['', [Validators.required]],
    quantity: [0],
    categoryId: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(4)]],
  });

  categories: ICategory[] = [];

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadCategories(); 
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

  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || '',
        author: this.productForm.value.author || '',
        price: this.productForm.value.price || 0,
        image: this.productForm.value.image || '',
        quantity: this.productForm.value.quantity || 0,
        description: this.productForm.value.description || '',
        categoryId: this.productForm.value.categoryId || '',
      };

      this.productService.addProduct(product).subscribe(
        (response) => {
          console.log('Thêm sản phẩm thành công:', response);
          this.toastr.success('Thêm sản phẩm thành công');
          this.router.navigate(['/admin/product']);
        },
        (error) => {
          console.error('Lỗi khi thêm sản phẩm:', error);
        }
      );
    }
  }
  
  onImageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.readFile(file).then((result: string) => {
        this.productForm.patchValue({ image: result });
      });
    }
  }

  readFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        resolve(event.target.result);
      };
      reader.onerror = (event: any) => {
        reject(event.target.error);
      };
      reader.readAsDataURL(file);
    });
  }

  isControlInvalid(controlName: string) {
    const control = this.productForm.get(controlName);
    return control?.invalid && control?.touched;
  }
}
