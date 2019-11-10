import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/UserService';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username = ''
  password = '123'
  age = '100'
  address = 'egypt'
  phone = '4324324'
  role = 'admin'

  constructor(public MyUserService: UserService, public MyRouter: Router) { }

  ngOnInit() {
  }

  handleSignup() {
    const { username, password, age, address, phone, role } = this
    if (username && password && age && address && phone && role) {
      this.MyUserService.userSignUp({
        username, password, age, phone, address, role
      }).subscribe((response: any) => {
        if (response.message === 'success') {
          this.MyRouter.navigate(['/signin'])
        } else {
          alert('error in response')
        }
      })

    }
    else {
      alert("please complete your signup..")
    }

  }

}
