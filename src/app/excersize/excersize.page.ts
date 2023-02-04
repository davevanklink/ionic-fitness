import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Category, CategoryService } from '../services/category.service';
import { RootState } from '../store';
import * as selectors from '../store/selectors/selectors';
import * as actions from '../store/actions/actions';
import { Excersize } from '../services/excersize.service';

@Component({
  selector: 'app-excersize',
  templateUrl: './excersize.page.html',
  styleUrls: ['./excersize.page.scss'],
})
export class ExcersizePage implements OnInit {
  selectedExcersize: Observable<Excersize | undefined> | undefined;

  constructor(
    private readonly store: Store<RootState>,
    private readonly catService: CategoryService
  ) { }

  ngOnInit() {
    this.selectedExcersize = this.store.pipe(select(selectors.getSelectedExcersize))
    // Load all excersizes for selected category
    this.store.dispatch(actions.loadExcersizes());

    this.selectedExcersize.pipe(take(1)).subscribe(x => {
      if (x) {
        this.catService.getCategoryById(x.categoryId);
      }
    })
  }

  onSelectExcersize(excersize: any) {
    console.log('onSelectExcersize', excersize);
  }

}
