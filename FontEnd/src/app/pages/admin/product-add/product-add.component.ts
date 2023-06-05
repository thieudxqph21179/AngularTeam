// import { Component } from '@angular/core';
// import { IProduct } from 'src/app/interface/Product';
// import { FormBuilder, Validators } from '@angular/forms';
// import { ProductService } from 'src/app/services/product.service';

// @Component({
//   selector: 'app-product-add',
//   templateUrl: './product-add.component.html',
//   styleUrls: ['./product-add.component.scss']
// })
// export class ProductAddComponent {
//   productForm = this.formBuilder.group({
//     name: ['', [Validators.required, Validators.minLength(4)]],
//     author: ['', [Validators.required, Validators.minLength(4)]],
//     price: [0],
//     img: [''],
//     quantity: [0],
//     description: ['', [Validators.required, Validators.minLength(4)]],

//   })
//   constructor(
//     private productService: ProductService,
//     private formBuilder: FormBuilder) { }


//     onHandleSubmit() {
//       if (this.productForm.valid) {
//         const product: IProduct = {
//           name: this.productForm.value.name || "",
//           author: this.productForm.value.author || "",
//           price: this.productForm.value.price || 0,
//           img: this.productForm.value.img || "",
//           quantity: this.productForm.value.price || 0,
//           description: this.productForm.value.description || "",
//         }
//         this.productService.addProduct(product).subscribe(product => {
//           console.log('Thành công', product)
//         })
//       }
//     }  
// }

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interface/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    author: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    img: [''],
    quantity: [0],
    description: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) { }

  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || '',
        author: this.productForm.value.author || '',
        price: this.productForm.value.price || 0,
        // img: this.productForm.value.img || '',
        quantity: this.productForm.value.quantity || 0,
        description: this.productForm.value.description || '',
      };

      this.productService.addProduct(product).subscribe(
        (response) => {
          console.log('Thêm sản phẩm thành công:', response);
        },
        (error) => {
          console.error('Lỗi khi thêm sản phẩm:', error);
        }
      );
    }
  }
}
