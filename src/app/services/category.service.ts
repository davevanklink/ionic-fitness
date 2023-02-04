import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, collectionData, collectionGroup, CollectionReference,
  DocumentData, Firestore, query, where } from '@angular/fire/firestore';
import { getDocs } from '@firebase/firestore';
import { map, Observable, tap } from 'rxjs';
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

  // private collection: CollectionReference<DocumentData>;
  private collection: Observable<Category[]>;

  constructor(
    // private readonly db: Firestore,
    private readonly db: AngularFirestore,
    private readonly authService: AuthenticationService
  ) {
    // this.collection = collection(this.db, CATEGORY_COLLECTION);
    this.collection = this.db.collection<Category>(CATEGORY_COLLECTION).valueChanges();
  }

  getAllCategories() {
    // return collectionData(this.collection) as Observable<Category[]>;
    return this.collection;
  }

  // Todo: implement create
  async getCategoryById(id: number) {
    // console.log('getCategoryById', id);
    // const x = this.db.
    //   collection(CATEGORY_COLLECTION, ref => ref.where('id', '==', id))
    //   .valueChanges()
    //   .pipe(
    //     tap(result => console.log(result))
    //   );
    // return x.subscribe();

    // const q = query(collection(this.db, CATEGORY_COLLECTION), where("id", "==", id));
    // const snapshot = await getDocs(q);
    // console.log(snapshot);
  }
}
