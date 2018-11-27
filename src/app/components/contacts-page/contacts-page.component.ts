import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Message, PersonalInfo } from '../../interfaces/news.interface';
import { DataServiceService } from '../../services';

import { icon, latLng, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  personalInfo = {
    phone: {
      base: '',
      optional: ''
    },
    adress: '',
    email: ''
  };

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
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')
      ]),
      message: new FormControl('', Validators.required),
    });

    this.dataService.getPersonalInfo().subscribe(info => {
      this.personalInfo = info[0];
      this.cd.detectChanges();
    });
  }

  sendMessage() {
    const newMessage: Message = {
      name: this.formMessage.value.name,
      email: this.formMessage.value.email,
      phone: this.formMessage.value.phone,
      message: this.formMessage.value.message,
      data: new Date().toString()
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
