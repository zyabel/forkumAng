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
    const dataNews = this.newsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;

        return data;
      });
    });

    return dataNews;
  }

  getBookById(id: string) {
    return this.newsCollection.doc(id).valueChanges();
  }

  addBook(news) {
    return this.newsCollection.add(news);
  }

  // editBook(book) {
  //   return of(book);
  // }

  deleteBook(id: string) {
    const news = this.newsCollection.doc(id);
    news.delete();
  }
}
