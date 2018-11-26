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
  data: Date;
}
