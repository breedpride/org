import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
type Item = any;
@Injectable()
export class FirestoreDataService {
  private itemDoc!: AngularFirestoreDocument<Item>;
  item!: Observable<Item>;

  constructor(private afs: AngularFirestore) {}

  public postToFirestore(): void {
    this.itemDoc = this.afs.doc<any>('path/microschihuas-back-in-the-future');
    this.item = this.itemDoc.valueChanges();
  }
  update(item: Item): void {
    this.itemDoc.update(item);
  }
  updateDoc(path: string, value: any): void {
    console.log(path);
    const pet: Record<string, any> = new Object(value);
    console.log(pet);
    this.afs.doc<any>(path).update(pet);
  }
}
