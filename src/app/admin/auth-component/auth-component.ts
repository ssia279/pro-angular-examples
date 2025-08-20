import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../model/auth-service';

@Component({
  selector: 'auth-component',
  standalone: false,
  templateUrl: './auth-component.html',
  styleUrl: './auth-component.css'
})
export class AuthComponent {
  username?: string;
  password?: string;
  errorMessage?: string;

  constructor(private router: Router, private auth: AuthService) {
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth.authenticate(this.username ?? "", this.password ?? "")
        .subscribe(response => {
          if (response) {
            this.router.navigateByUrl("/admin/main");
          }
          this.errorMessage = "Authentication Failed";
        })
      this.router.navigateByUrl("/admin/main").then();
    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }
}
