import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ICategory } from 'src/app/interface/Category';


@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent {
  categoryForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
  ) { }

  onHandleSubmit() {
    if (this.categoryForm.valid) {
      const category: ICategory = {
        name: this.categoryForm.value.name || '',
      };

      this.categoryService.addCategory(category).subscribe(
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


