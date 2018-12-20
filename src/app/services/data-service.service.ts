import { Injectable } from '@angular/core';

import { News, Message, PersonalInfo, ProductCard, Slide } from '../interfaces/news.interface';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { DocumentReference } from '@firebase/firestore-types';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  sliderCollection: AngularFirestoreCollection<Slide>;
  newsCollection: AngularFirestoreCollection<News>;
  messageCollection: AngularFirestoreCollection<Message>;
  infoCollection: AngularFirestoreCollection<PersonalInfo>;
  productsCollection: AngularFirestoreCollection<ProductCard>;
  cashInfoCollection: AngularFirestoreCollection<any>;
  servicesCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.sliderCollection = this.afs.collection('slider');
    this.newsCollection = this.afs.collection('news');
    this.messageCollection = this.afs.collection('messages');
    this.infoCollection = this.afs.collection('personalInfo');
    this.cashInfoCollection = this.afs.collection('cashCarry');
    this.servicesCollection = this.afs.collection('servicesCollection');
  }

  // news methods
  getSliderData(): Observable<Slide[]> {
    const dataSlider = this.sliderCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;

        return data;
      });
    });

    return dataSlider;
  }

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

  getSlideById(id: string): Observable<{}> {
    return this.sliderCollection.doc(id).valueChanges();
  }

  addNews(news: News): Promise<DocumentReference> {
    return this.newsCollection.add(news);
  }

  editNews(news: News): void {
    this.newsCollection.doc(news.id).update(news);
  }

  editSlide(slide: Slide): void {
    this.sliderCollection.doc(slide.id).update(slide);
  }

  deleteNews(id: string): void {
    this.newsCollection.doc(id).delete();
  }

  deleteSlide(id: string): void {
    this.sliderCollection.doc(id).delete();
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

  // products methods
  getAllProducts(type): Observable<ProductCard[]> {
    this.productsCollection = this.afs.collection(type);
    const products = this.productsCollection.snapshotChanges().map(product => {
      return product.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;

        return data;
      });
    });

    return products;
  }

  getCashInfo(): Observable<any> {
    const cashInfo = this.cashInfoCollection.snapshotChanges().map(info => {
      return info.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;

        return data;
      });
    });

    return cashInfo;
  }

  deleteCard(id, collection): void {
    this.productsCollection = this.afs.collection(collection);
    this.productsCollection.doc(id).delete();
  }

  editCard(id: string, collection: string, updateData, documentField): void {
    this.productsCollection = this.afs.collection(collection);
    this.productsCollection.doc(id).update({[documentField]: updateData});
  }

  // services methods
  getServicesPriceData(): Observable<any> {
    const dataPrice = this.servicesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;

        return data;
      });
    });

    return dataPrice;
  }
}
