import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/LoginService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService:LoginService){}
  login(form:NgForm){
    const email = form.value.mailInput;
    const password = form.value.passwordInput
    this.loginService.logIn(email,password);
  }
}
