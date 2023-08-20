import { Injectable } from '@angular/core';
import { Ticket } from './ticket.model';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class TicketRepository {
  private tickets: Ticket[] = [];

  constructor(private datasource: RestDataSource) {
    datasource.getTickets().subscribe((data) => (this.tickets = data));
  }

  getTickets(selectedStatus: string): Ticket[] {
    if (selectedStatus === '') {
      return this.tickets;
    }

    return this.tickets.filter((t) => t.status == selectedStatus);
  }

  getTicket(_id: string): Ticket | undefined {
    return this.tickets.find((t) => t._id === _id);
  }

  addTicket() {
    this.tickets = [
      ...this.tickets,
      new Ticket(
        '12345' + Math.ceil(Math.random() * 1000),
        'First opened ticket',
        'Open',
        'This is the first ticket description',
        new Date(),
        ['John', 'Smith'],
        ['John', 'Smith'],
        [['This is the first comment', new Date()]],
        undefined
      ),
    ];
  }
}
