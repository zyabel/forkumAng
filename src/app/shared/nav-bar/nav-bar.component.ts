import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  links: {}[];

  isLogin: boolean = false;

  constructor(private router: Router,
              private auth: AuthService) { }

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

    this.auth.checkAuth()
      .subscribe( auth => {
        if (auth) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      });
  }


  logOut(): void {
    this.auth.logOut();
  }
}
