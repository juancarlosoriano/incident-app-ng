import { Injectable } from '@angular/core';
import { User } from './user.model';
import { RestDataSource } from './rest.datasource';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  private users: User[] = [];

  constructor(private datasource: RestDataSource) {
    datasource.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }

  loginUser(params: object) {
    return this.datasource.loginUser(params);
  }

  setUserCredentials(params: object) {
    localStorage.setItem('currentUser', JSON.stringify(params));
  }

  getCurrentUser(): string {
    return localStorage.getItem('currentUser') || '';
  }

  getCurrentUserName() {
    let currentUser = this.getCurrentUser();
    if (currentUser) {
      return JSON.parse(currentUser)['name'] || '';
    } else {
      return null;
    }
  }

  getUserById(id: string) {
    return this.users.filter((u) => u._id == id)[0];
  }

  isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
  }

  getUsers(): User[] {
    return this.users;
  }

  registerUser(params: object) {
    return this.datasource.registerUser(params);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
}
