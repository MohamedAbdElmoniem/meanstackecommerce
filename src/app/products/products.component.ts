import { Component, OnInit } from '@angular/core';
import { CategoriesServices } from '../Services/CategoriesServices';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = []

  // charts properties

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'products';
  showYAxisLabel = true;
  yAxisLabel = 'prices';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(public MyCategoriesServices: CategoriesServices) { }

  ngOnInit() {
    let currentCategoryId = this.MyCategoriesServices.category._id
    this.MyCategoriesServices.getAllProducts(currentCategoryId)
      .subscribe((response: any) => {
        this.products = response.products

        this.single = this.products.map((val, ind) => {
          return { name: val.product_name, value: val.price }
        })
      })
  }

}

//https://swimlane.gitbook.io/ngx-charts/examples/pie-charts/pie-chart
