import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from './ticket.model';
import { User } from './user.model';
import { JwtHelperService } from '@auth0/angular-jwt';

const PROTOCOL = 'https';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string = '';
  authToken: string = '';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requseted-With, Content-Type, Accept',
    }),
  };

  constructor(private http: HttpClient, private jwtService: JwtHelperService) {
    this.baseUrl = `${PROTOCOL}://cc-incident-app-31387c7de615.herokuapp.com/`;
  }

  // login():

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.baseUrl + 'tickets');
  }

  private loadToken(): void {
    const token = localStorage.getItem('id_token') || '';
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set(
      'Authorization',
      this.authToken
    );
  }
}
