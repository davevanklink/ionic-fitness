import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/compat/firestore';
import { collection, collectionData, CollectionReference, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import * as firebase from 'firebase/compat';
import { Observable } from 'rxjs';
import { AuthenticationService } from './auth.service';

interface excersize {
  name: string;
  reps: number;
  weight: number;
  date: string;
  sets: number;
  userId: string | null;
}

const DATA_COLLECTION = 'excersizes';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private collection: CollectionReference<DocumentData>;

  constructor(
    private readonly db: Firestore,
    private readonly authService: AuthenticationService
  ) {
    this.collection = collection(this.db, DATA_COLLECTION);
    console.log(authService.userUid);
  }

  getAll() {
    return collectionData(this.collection, {
      idField: undefined
    }) as Observable<excersize[]>
  }

  createUserDoc() {
    if (this.authService.userUid) {
      const document = doc(collection(this.db, this.authService.userUid));
      return setDoc(document, { someting: 'something' })
    }
    return;
  }

  create(data: excersize) {
    addDoc(this.collection, data);
  }
  
  // Get all categories
  getAllCategories() {
    console.log('getAllCategories');
  }

  // Get all excersizs for a given categoryId
  getAllExcersizesByCategoryId(catId: number) {
    console.log('getAllExcersizes', catId);
  }

  // Get al data for given excersizeId for the current user
  getExcersizeDataByExcersizeId(excersizeId: number, userId: number) {
    console.log('getExcersizeData', excersizeId, userId);
  }
}
