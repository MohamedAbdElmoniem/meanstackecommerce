import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})


export class UserService {
  constructor(public MyHttpClient: HttpClient) {

  }

  userSignUp(data) {
    return this.MyHttpClient.post('http://localhost:8085/signup', data)
  }

  userSignIn(data) {
    return this.MyHttpClient.post('http://localhost:8085/signin', data, { withCredentials: true })
  }
  userSignout() {
    return this.MyHttpClient.get('http://localhost:8085/signout', { withCredentials: true })
  }
}
