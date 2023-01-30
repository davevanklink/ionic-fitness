import { Component } from '@angular/core';
import { getAuth, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';
import { ExcersizeService } from '../services/excersize.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public user?: User = undefined;

  constructor(
    private readonly esService: ExcersizeService,
    private readonly authService: AuthenticationService,
    public router: Router,
  ) {
    // Temp
    this.esService.getAll().subscribe(i => console.log(i));

    this.user = this.authService.storedUser;
    this.esService.createUserDoc();
  }

  // Temp
  create() {
    this.esService.create({
      date: new Date().toISOString(),
      name: 'Lat test 2',
      reps: 10,
      sets: 1,
      weight: 50,
      userId: this.authService.userUid
    });
  }
  
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
}
