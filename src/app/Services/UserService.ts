import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})


export class UserService {
  constructor(public MyHttpClient: HttpClient) {

  }

  userSignUp(data) {
    return this.MyHttpClient.post('https://meanstackecommerce.herokuapp.com/signup', data)
  }

  userSignIn(data) {
    return this.MyHttpClient.post('https://meanstackecommerce.herokuapp.com/signin', data, { withCredentials: true })
  }
  userSignout() {
    return this.MyHttpClient.get('https://meanstackecommerce.herokuapp.com/signout', { withCredentials: true })
  }
}
