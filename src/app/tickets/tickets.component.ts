import { Component } from '@angular/core';
import { Ticket } from 'src/model/ticket.model';
import { TicketRepository } from 'src/model/ticket.repository';

@Component({
  selector: 'app-ticket-store',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent {
  public selectedStatus = '';

  constructor(private repository: TicketRepository) {}

  get tickets(): Ticket[] {
    return this.repository.getTickets(this.selectedStatus);
  }

  changeStatus(newStatus: string = ''): void {
    this.selectedStatus = newStatus;
  }

  addTicket(): void {
    this.repository.addTicket();
  }
}
