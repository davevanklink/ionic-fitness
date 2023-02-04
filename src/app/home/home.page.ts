import { Component } from '@angular/core';
import { getAuth, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AppState } from '@capacitor/app';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { RootState } from '../store';
import * as actions from '../store/actions/actions';
import * as selectors from '../store/selectors/selectors';
import { selectTest }  from  '../store/selectors/selectors'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user?: User = undefined;

  constructor(
    private readonly esService: DataService,
    private readonly authService: AuthenticationService,
    public router: Router,
    private store: Store<RootState>
  ) {
    // Temp
    // this.esService.getAll().subscribe(i => console.log(i));

    this.user = this.authService.storedUser;
    
    // this.esService.createUserDoc();
    // this.store.dispatch(actions.testAction({ data: true }));
  }

  // Temp
  create() {
    // this.esService.create({
    //   date: new Date().toISOString(),
    //   name: 'Lat test 2',
    //   reps: 10,
    //   sets: 1,
    //   weight: 50,
    //   userId: this.authService.userUid
    // });
    // this.store.dispatch(actions.testAction({ data: true }));
  }
  
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
}
