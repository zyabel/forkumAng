import { Injectable } from '@angular/core';

import { News, Message } from '../interfaces/news.interface';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { DocumentReference } from '@firebase/firestore-types';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  newsCollection: AngularFirestoreCollection<News>;
  messageCollection: AngularFirestoreCollection<Message>;

  constructor(private afs: AngularFirestore) {
    this.newsCollection = this.afs.collection('news');
    this.messageCollection = this.afs.collection('messages');
   }

  // news methods
  getNewsData(): Observable<News[]> {
    const dataNews = this.newsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;

        return data;
      });
    });

    return dataNews;
  }

  getNewsById(id: string): Observable<{}> {
    return this.newsCollection.doc(id).valueChanges();
  }

  addNews(news: News): Promise<DocumentReference> {
    return this.newsCollection.add(news);
  }

  editNews(news: News): void {
    this.newsCollection.doc(news.id).update(news);
  }

  deleteNews(id: string): void {
    this.newsCollection.doc(id).delete();
  }

  // messages methods
  addMessage(message: Message): Promise<DocumentReference> {
    return this.messageCollection.add(message);
  }
}
