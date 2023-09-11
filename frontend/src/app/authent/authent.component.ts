import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authent',
  templateUrl: './authent.component.html',
  styleUrls: ['./authent.component.css']
})
export class AuthentComponent {
  
  title = 'Mellove'
  logo = '../../assets/MelloveLogo.png'
  login = 'Login Here!'
  loginSub = 'Listen Music Non Stop'
  uPlace = 'Username';
  pPlace = 'Password';
  uName = ""; 
  pass = "";

  terms = "By registering here, you have agreed to the terms and conditions of Mellove.";
  register = "Don't have an account sign up now for free.";

  constructor(private router : Router) {
  }

  authent() {
    // authentication logic
    if(this.uName == 'admin' && this.pass == 'admin') {
      alert('Login Successful');
      this.router.navigate(['/main']); 
    } else {
      alert('Login Failed');
    }

  }

  signin() {
    this.router.navigate(['/register']);
  }
}
