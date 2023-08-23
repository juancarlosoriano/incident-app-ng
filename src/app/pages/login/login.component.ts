import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/model/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private router: Router) {
    if (authService.isLoggedIn()) {
      this.router.navigate(['/tickets']).then(() => {
        window.location.reload();
      });
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  loginUser(): void {
    let params = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    };

    this.authService.loginUser(params).subscribe((data) => {
      if (data.status === 200) {
        this.authService.setUserCredentials({
          token: data.body.token,
          userId: data.body.userId,
          name: data.body.name,
        });
        this.router.navigate(['/tickets']).then(() => {
          window.location.reload();
        });
      }
    });
  }
}
