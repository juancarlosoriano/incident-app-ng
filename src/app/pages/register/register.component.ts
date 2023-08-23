import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/model/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
    });
  }

  registerUser(): void {
    let params = {
      username: this.registerForm.get('username')?.value,
      password: this.registerForm.get('password')?.value,
      name: this.registerForm.get('name')?.value,
      email: this.registerForm.get('email')?.value,
    };

    this.authService.registerUser(params).subscribe((data) => {
      if (data.status === 200) {
        this.router.navigate(['/login']);
      }
    });
  }
}
