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

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.baseUrl + 'tickets');
  }

  editTicket(id: string, params: object) {
    const url = this.baseUrl + 'tickets/' + id;
    return this.http.put<any>(url, params, {
      observe: 'response',
      headers: this.httpOptions.headers,
    });
  }

  openTicket(id: string) {
    const url = this.baseUrl + 'tickets/open/' + id;
    return this.http.put<any>(
      url,
      {},
      {
        observe: 'response',
        headers: this.httpOptions.headers,
      }
    );
  }

  resolveTicket(id: string) {
    const url = this.baseUrl + 'tickets/resolve/' + id;
    return this.http.put<any>(
      url,
      {},
      {
        observe: 'response',
        headers: this.httpOptions.headers,
      }
    );
  }

  deleteTicket(id: string) {
    const url = this.baseUrl + 'tickets/delete/' + id;
    return this.http.delete<any>(url, {
      observe: 'response',
      headers: this.httpOptions.headers,
    });
  }

  addTicket(params: object) {
    const url = this.baseUrl + 'tickets/add';
    return this.http.post<any>(url, params, {
      observe: 'response',
      headers: this.httpOptions.headers,
    });
  }

  addComment(ticketId: string, params: object) {
    const url = this.baseUrl + 'tickets/create_comment/' + ticketId;
    return this.http.put<any>(url, params, {
      observe: 'response',
      headers: this.httpOptions.headers,
    });
  }

  // User Management

  getUsers(): Observable<User[]> {
    return this.http.get<any>(this.baseUrl + 'users/');
  }

  loginUser(params: object) {
    // Log in the user
    const url = this.baseUrl + 'users/login';
    return this.http.post<any>(url, params, { observe: 'response' });
  }

  registerUser(params: object) {
    // Register the user
    const url = this.baseUrl + 'users/register';
    return this.http.post<any>(url, params, { observe: 'response' });
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
