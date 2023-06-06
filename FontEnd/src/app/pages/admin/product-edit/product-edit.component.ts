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
  ){
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
        this.productForm.patchValue({
          name: product.name,
          author: product.author,
          price: product.price,
          img: product.img,
          quantity: product.quantity,
          description: product.description
        })
      })
    })
  }
  onHandleUpdate(){
    if(this.productForm.valid){
      const newProduct : IProduct = {
        name: this.productForm.value.name || '',
        author: this.productForm.value.author || '',
        price: this.productForm.value.price || 0,
        // img: this.productForm.value.img || '',
        quantity: this.productForm.value.quantity || 0,
        description: this.productForm.value.description || '',
      }
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
