import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/model/ticket.model';
import { TicketRepository } from 'src/model/ticket.repository';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css'],
})
export class ViewTicketComponent implements OnInit {
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

  formatStringTuple(tuple: [string, string] | undefined): string {
    if (!tuple) {
      return '';
    } else {
      return `${tuple[0]} ${tuple[1]}`;
    }
  }
}
