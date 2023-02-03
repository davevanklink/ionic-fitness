import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from '../services/category.service';
import { RootState } from '../store';
import * as selectors from '../store/selectors/selectors';
import * as actions from '../store/actions/actions';

@Component({
  selector: 'app-excersize',
  templateUrl: './excersize.page.html',
  styleUrls: ['./excersize.page.scss'],
})
export class ExcersizePage implements OnInit {
  selectedCategory: Observable<Category | undefined> | undefined;

  constructor(private readonly store: Store<RootState>) { }

  ngOnInit() {
    this.selectedCategory = this.store.pipe(select(selectors.getSelectedCategory))
    // Load all excersizes for selected category
  }

  onSelectExcersize(excersize: any) {
    console.log('onSelectExcersize', excersize);
  }

}
