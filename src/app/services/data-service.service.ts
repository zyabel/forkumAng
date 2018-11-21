import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  // TODO: create interfaces for news
  newsCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.newsCollection = this.afs.collection('news');
   }

  getNewsData() {
    const dataNews = this.newsCollection.valueChanges().map (collection => collection);

    return dataNews;
  }
}
