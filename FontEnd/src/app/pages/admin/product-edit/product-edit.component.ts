import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/Product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product!: IProduct;
  ObjectId!: string;

  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    author: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    img: [''],
    quantity: [0],
    description: ['', [Validators.required, Validators.minLength(4)]],
  })

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe(param => {
      this.ObjectId = String(param.get('id'));
      // Gọi hàm getProduct() để lấy thông tin sản phẩm
      this.getProduct();
    });
  }

  getProduct() {
    this.productService.getProductById(this.ObjectId).subscribe(product => {
      this.product = product;
      this.productForm.patchValue({
        name: product.name,
        author: product.author,
        price: product.price,
        img: product.img,
        quantity: product.quantity,
        description: product.description
      });
    });
  }

  onHandleUpdate(){
    if(this.productForm.valid){
      const newProduct: IProduct = {
        _id: this.ObjectId,
        name: this.productForm.value.name || '',
        author: this.productForm.value.author || '',
        price: this.productForm.value.price || 0,
        img: this.productForm.value.img || '',
        quantity: this.productForm.value.quantity || 0,
        description: this.productForm.value.description || '',
      };
      this.productService.updateProduct(newProduct).subscribe(
        (response)=> {
          console.log('Sửa sản phẩm thành công:', response);
        },
        (error) => {
          console.error('Lỗi khi sửa sản phẩm:', error);
        }
      )
    }
  }
}
