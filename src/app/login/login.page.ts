import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IonInput } from '@ionic/angular';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() { }

  logIn(email: IonInput, password: IonInput) {
    if (email.value && typeof email.value === 'string'
      && password.value && typeof password.value === 'string') {
      this.authService.signIn(email.value, password.value)
        .then(() => {
          if (this.authService.isEmailVerified) {
            return this.router.navigate(['home']);
          } else {
            window.alert('Email is not verified')
            return false;
          }
        }).catch((error) => {
          window.alert(error.message)
        })
    }
  }
}