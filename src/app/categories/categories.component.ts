import { Component, OnInit } from '@angular/core';
import { CategoriesServices } from '../Services/CategoriesServices';
import { UserService } from '../Services/UserService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any = []

  constructor(public MyCategoriesServices: CategoriesServices,
    public MyUserService: UserService,
    public MyRouter: Router) { }

  ngOnInit() {
    this.MyCategoriesServices.getAllCategories()
      .subscribe((response: any) => {
        if (response.message === 'error') {
          this.MyRouter.navigate(['/error'])
        } else {
          this.categories = response.categories

        }
      })
  }

  handleSignout() {
    this.MyUserService.userSignout().subscribe((response: any) => {
      if (response.message === 'success') {
        this.MyRouter.navigate(['/signin'])
      }
    })
  }

  navigateToProducts(category) {
    this.MyCategoriesServices.category = category
    this.MyRouter.navigate(['/products'])
  }

}
