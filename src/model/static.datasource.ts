import { Injectable } from '@angular/core';
import { Ticket } from './ticket.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource {
  private tickets: Ticket[] = [
    new Ticket(
      '12345',
      'First opened ticket',
      'Open',
      'This is the first ticket description',
      new Date(),
      ['John', 'Smith'],
      ['John', 'Smith'],
      [['This is the first comment', new Date()]],
      undefined
    ),
    new Ticket(
      '12348',
      'Second opened ticket',
      'Open',
      'This is the second ticket description',
      new Date(),
      ['John', 'Smith'],
      ['John', 'Smith'],
      [['This is the first comment', new Date()]],
      undefined
    ),
    new Ticket(
      '12349',
      'Third opened ticket',
      'Closed',
      'This is the third ticket description',
      new Date(),
      ['John', 'Smith'],
      ['John', 'Smith'],
      [['This is the first comment', new Date()]],
      undefined
    ),
    new Ticket(
      '123488',
      'Fourth opened ticket',
      'Closed',
      'This is the fourth ticket description',
      new Date(),
      ['John', 'Smith'],
      ['John', 'Smith'],
      [['This is the first comment', new Date()]],
      undefined
    ),
  ];

  getTickets(): Observable<Ticket[]> {
    return from([this.tickets]);
  }
}
