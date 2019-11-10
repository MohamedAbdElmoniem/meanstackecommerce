import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/UserService';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  username = 'moniem1'
  password = '123'
  constructor(public MyUserService: UserService, public MyRouter: Router) { }

  ngOnInit() {
  }

  handleSignin() {
    const { username, password } = this
    if (username && password) {
      this.MyUserService.userSignIn({
        username, password
      }).subscribe((response: any) => {

        if (response.message === 'success') {
          this.MyRouter.navigate(['/home'])
        } else {
          alert('error in response')
        }
      })

    }
    else {
      alert("please complete your signin..")
    }

  }

}
