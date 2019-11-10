import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})


export class CategoriesServices {

  category: any = {}
  constructor(public MyHttpClient: HttpClient) {

  }

  getAllCategories() {
    return this.MyHttpClient.get('https://meanstackecommerce.herokuapp.com/getallcategories', { withCredentials: true })
  }

  getAllProducts(category_id) {
    return this.MyHttpClient.post('https://meanstackecommerce.herokuapp.com/getallproducts', { category: category_id }, { withCredentials: true })
  }


}
