import { Data } from '@angular/router';

export interface News {
  id?: string;
  title: string;
  text: string;
  data: string;
}
export interface Message {
  name: string;
  email: string;
  phone: number;
  message: string;
  data: string;
  id?: string;
}

export interface PersonalInfo {
  phone: {
    base: string;
    optional: string;
  };
  adress: string;
  email: string;
  id?: string;
}

export interface ProductCard {
  id: string;
  information: {
    cardTitle: string;
    imgPath: string;
    price: number;
  };
  modal: {
    description: string;
  };
}

