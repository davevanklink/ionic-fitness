import { Component } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { ExcersizeService } from '../services/excersize.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private readonly esService: ExcersizeService) {
    this.esService.getAll().subscribe(i => console.log(i));
  }

  create() {
    this.esService.create({
      date: new Date().toISOString(),
      name: 'Lat test 2',
      reps: 10,
      sets: 1,
      weight: 50,
      // userId: logged in userId
    });
  }

}
