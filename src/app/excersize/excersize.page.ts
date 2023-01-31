import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excersize',
  templateUrl: './excersize.page.html',
  styleUrls: ['./excersize.page.scss'],
})
export class ExcersizePage implements OnInit {
  public catId: unknown;

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.catId = this.route.snapshot.paramMap.get('id');
  }

}
