import { Component } from '@angular/core';
import { TicketRepository } from 'src/model/ticket.repository';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css'],
})
export class EditTicketComponent {
  constructor(private repository: TicketRepository) {}
}
