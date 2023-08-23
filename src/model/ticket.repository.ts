import { Injectable } from '@angular/core';
import { Ticket } from './ticket.model';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class TicketRepository {
  private tickets: Ticket[] = [];

  constructor(private datasource: RestDataSource) {
    datasource.getTickets().subscribe((data) => {
      this.tickets = data;
    });
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

  editTicket(_id: string, params: object) {
    return this.datasource.editTicket(_id, params);
  }

  openTicket(_id: string) {
    return this.datasource.openTicket(_id);
  }

  resolveTicket(_id: string) {
    return this.datasource.resolveTicket(_id);
  }

  deleteTicket(_id: string) {
    return this.datasource.deleteTicket(_id);
  }

  addTicket(params: object) {
    return this.datasource.addTicket(params);
  }

  addComment(_id: string, params: object) {
    return this.datasource.addComment(_id, params);
  }
}
