import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  links: {}[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.links = [
      {
        path: 'home',
        title: 'Home'
      },
      {
        path: 'services',
        title: 'Services'
      },
      {
        path: 'products',
        title: 'Products'
      },
      {
        path: 'faq',
        title: 'Faq'
      },
      {
        path: 'contacts',
        title: 'Contacts'
      }
    ];
  }
}
