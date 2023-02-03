import { Injectable } from '@angular/core';
import { collection, collectionData, CollectionReference, DocumentData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthenticationService } from './auth.service';

const CATEGORY_COLLECTION = 'categories';

export interface Category {
  id: number;
  title: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private collection: CollectionReference<DocumentData>;

  constructor(
    private readonly db: Firestore,
    private readonly authService: AuthenticationService
  ) {
    this.collection = collection(this.db, CATEGORY_COLLECTION);
  }

  getAllCategories() {
    return collectionData(this.collection) as Observable<Category[]>;
  }

  // Todo: implement create
}
