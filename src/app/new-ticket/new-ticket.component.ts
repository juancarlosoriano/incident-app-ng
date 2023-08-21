import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/model/ticket.model';
import { TicketRepository } from 'src/model/ticket.repository';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'],
})
export class NewTicketComponent {
  public newTicket?: Ticket;

  constructor(
    private repository: TicketRepository,
    private route: ActivatedRoute
  ) {}

  // Add new ticket
}
