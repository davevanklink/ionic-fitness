import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IonInput } from '@ionic/angular';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() { }

  signUp(email: IonInput, password: IonInput, userName: IonInput) {
    if (email.value && typeof email.value === 'string'
      && password.value && typeof password.value === 'string'
      && typeof userName.value === 'string') {
      this.authService.registerUser(email.value, password.value, userName?.value)
        .then(() => {
          // Do something here
          this.authService.sendVerificationMail()
          this.router.navigate(['verify-email']);
        }).catch((error) => {
          window.alert(error.message)
        })
    }
  }
}