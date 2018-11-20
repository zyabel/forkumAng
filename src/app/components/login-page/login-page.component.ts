import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email: string;

  pass: string;

  isShowSuccess: boolean = false;
  isShowError: boolean = false;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.auth.checkAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/home']);
      }
    });
  }

  onSubmit(): void {
    this.auth.login(this.email, this.pass)
      .then(user => {
        this.router.navigate(['/home']);
        this.isShowSuccess = true;
      })
      .catch(err => this.isShowError = true);
  }
}
