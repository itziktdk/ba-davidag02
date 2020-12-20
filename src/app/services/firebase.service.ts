// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'Customers';

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_customer(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  read_customers() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_customer(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_customer(record_id) {
    this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }
}
