import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private readonly authService: AuthenticationService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  onLogOut() {
    this.authService.signOut().then(() => this.router.navigate(['login']));
  }

}
