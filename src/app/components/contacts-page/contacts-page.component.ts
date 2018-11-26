import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { Message } from '../../interfaces/news.interface';
import { DataServiceService } from '../../services';

import { icon, latLng, marker, polyline, tileLayer } from 'leaflet';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  formMessage: FormGroup;
  name: FormControl;
  email: FormControl;
  phone: FormControl;
  message: FormControl;

  isSuccessSend: boolean = false;

  isWarningSend: boolean = false;

  // Marker for the top of Mt. Ranier
  summit = marker([ 49.985783, 36.225499 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }),
      this.summit
    ],
    zoom: 15,
    center: latLng([ 49.985783, 36.225499 ])
  };

  constructor(private dataService: DataServiceService,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.formMessage = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      message: new FormControl(),
   });
  }

  sendMessage() {
    const newMessage: Message = {
      name: this.formMessage.value.name,
      email: this.formMessage.value.email,
      phone: this.formMessage.value.phone,
      message: this.formMessage.value.message,
      data: new Date()
    };
    if (this.formMessage.valid) {
      this.dataService.addMessage(newMessage);
      this.isSuccessSend = true;
      this.isWarningSend = false;
      this.formMessage.reset();
      this.cd.detectChanges();
    } else {
      this.isWarningSend = true;
    }
  }
}
