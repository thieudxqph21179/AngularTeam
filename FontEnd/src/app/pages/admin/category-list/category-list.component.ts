import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ICategory } from 'src/app/interface/Category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  category: ICategory[] = [];

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategory().subscribe(
      (data) => {
        this.category = data;
        console.log(data);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}




