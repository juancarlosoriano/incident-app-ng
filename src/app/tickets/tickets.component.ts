import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/model/auth.service';
import { Ticket } from 'src/model/ticket.model';
import { TicketRepository } from 'src/model/ticket.repository';

@Component({
  selector: 'app-ticket-store',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent {
  public selectedStatus = '';

  constructor(
    private repository: TicketRepository,
    private router: Router,
    authService: AuthService
  ) {
    console.log('isLoggedIn', authService.isLoggedIn());
  }

  get tickets(): Ticket[] {
    return this.repository.getTickets(this.selectedStatus);
  }

  changeStatus(newStatus: string = ''): void {
    this.selectedStatus = newStatus;
  }

  // Refactor
  openTicket(_id?: string) {
    if (_id) {
      this.repository.openTicket(_id).subscribe((data) => {
        if (data.status == 200) {
          window.location.reload();
        }
      });
    }
  }

  // Refactor
  resolveTicket(_id?: string) {
    if (_id) {
      this.repository.resolveTicket(_id).subscribe((data) => {
        if (data.status == 200) {
          window.location.reload();
        }
      });
    }
  }

  // Refactor
  deleteTicket(_id?: string) {
    if (_id) {
      this.repository.deleteTicket(_id).subscribe((data) => {
        if (data.status == 200) {
          console.log('Ticket successfully deleted!');
          window.location.reload();
        }
      });
    }
  }

  test() {
    console.log('Deleting ticket...');
  }

  addTicket(): void {
    this.router.navigate(['new-ticket']);
  }
}
