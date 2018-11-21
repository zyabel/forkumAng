import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @ViewChild('form') form;
  email: string;

  pass: string;

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
    if (this.form.invalid) {
      this.isShowError = true;
    }

    this.auth.login(this.email, this.pass)
      .then(user => {
        this.router.navigate(['/home']);
      })
      .catch(err => this.isShowError = true);
  }
}
