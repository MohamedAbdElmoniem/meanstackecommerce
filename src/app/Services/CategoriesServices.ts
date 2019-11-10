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
    return this.MyHttpClient.get('http://localhost:8085/getallcategories', { withCredentials: true })
  }

  getAllProducts(category_id) {
    return this.MyHttpClient.post('http://localhost:8085/getallproducts', { category: category_id }, { withCredentials: true })
  }


}
