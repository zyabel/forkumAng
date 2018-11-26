import { Component, OnInit } from '@angular/core';

import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 15,
    center: latLng([ 49.985783, 36.225499 ])
  };

  constructor() { }

  ngOnInit() {
  }

}
