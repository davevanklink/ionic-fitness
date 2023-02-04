import { Injectable } from '@angular/core';
import { collection, collectionData, CollectionReference, DocumentData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Excersize {
  id: number;
  categoryId: number;
  title: string;
}

const EXCERSIZE_COLLECTION = 'excersizes';
@Injectable({
  providedIn: 'root'
})
export class ExcersizeService {
  private collection: CollectionReference<DocumentData>;

  constructor(
    private readonly db: Firestore,
  ) {
    this.collection = collection(this.db, EXCERSIZE_COLLECTION);
  }

  getAllExcersizesByCategory(categoryId: number) {
    console.log('getAllExcersizesByCategory', categoryId)
    return collectionData(this.collection) as Observable<Excersize[]>;
  }

}
