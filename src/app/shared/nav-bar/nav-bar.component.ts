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

  linksAdmin: {}[];

  admin: string;

  isLogin: boolean = false;

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
    this.links = [
      {
        path: 'home',
        title: 'Главная'
      },
      {
        path: 'services',
        title: 'Услуги'
      },
      {
        path: 'products',
        title: 'Каталог'
      },
      {
        path: 'faq',
        title: 'Вопросы'
      },
      {
        path: 'contacts',
        title: 'Контакты'
      }
    ];

    this.linksAdmin = [
      {
        path: 'messages/admin',
        title: 'Messages'
      },
      {
        path: 'home/admin',
        title: 'Home'
      },
      {
        path: 'services/admin',
        title: 'Services'
      },
      {
        path: 'products/admin',
        title: 'Products'
      },
      {
        path: 'faq/admin',
        title: 'Faq'
      },
      {
        path: 'contacts/admin',
        title: 'Contacts'
      }
    ];
    this.auth.checkAuth()
      .subscribe( auth => {
        if (auth) {
          this.isLogin = true;
          this.admin = auth.email;
        } else {
          this.isLogin = false;
        }
      });
  }


  logOut(): void {
    this.auth.logOut();
    this.isLogin = false;
  }
}
