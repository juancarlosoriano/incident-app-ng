import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/model/ticket.model';
import { TicketRepository } from 'src/model/ticket.repository';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css'],
})
export class EditTicketComponent implements OnInit {
  public id: string = '';

  constructor(
    private repository: TicketRepository,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }

  get ticket(): Ticket | undefined {
    return this.repository.getTicket(this.id);
  }
}
