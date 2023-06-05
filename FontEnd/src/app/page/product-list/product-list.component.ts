// import { Component } from '@angular/core';
// import { IProduct } from 'src/app/interface/Product';
// import { ProductService } from 'src/app/services/product.service';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.scss']
// })
// export class ProductListComponent {
//   products: IProduct[] = [];

//   constructor(private productService: ProductService) {
//     this.productService.getProducts().subscribe(
//       (data) => {
//         this.products = data;
//       },
//       (error) => {
//         console.log(error.message);
//       }
//     );
//   }

//   removeItem(id: any) {
//     this.productService.deleteProduct(id).subscribe(() => {
//       console.log('delete thanhf cong');
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interface/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  // @Input() products: IProduct[] = [];
  // @Output() onRemove = new EventEmitter<number>();

  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(data);
        
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
