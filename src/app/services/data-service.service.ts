import { Injectable } from '@angular/core';

import { News, Message, PersonalInfo } from '../interfaces/news.interface';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { DocumentReference } from '@firebase/firestore-types';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  newsCollection: AngularFirestoreCollection<News>;
  messageCollection: AngularFirestoreCollection<Message>;
  infoCollection: AngularFirestoreCollection<PersonalInfo>;

  constructor(private afs: AngularFirestore) {
    this.newsCollection = this.afs.collection('news');
    this.messageCollection = this.afs.collection('messages');
    this.infoCollection = this.afs.collection('personalInfo');
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

  getPersonalInfo(): Observable<PersonalInfo[]> {
    const personalInfo = this.infoCollection.snapshotChanges().map(info => {
      return info.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;

        return data;
      });
    });

    return personalInfo;
  }

  getAllMessage(): Observable<Message[]> {
    const messages = this.messageCollection.snapshotChanges().map(message => {
      return message.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;

        return data;
      });
    });

    return messages;
  }

  deleteMessage(id: string): void {
    this.messageCollection.doc(id).delete();
  }

  editPersonalInfo(personalInfo: PersonalInfo): void {
    this.infoCollection.doc(personalInfo.id).update(personalInfo);
  }
}
