import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/model/auth.service';
import { Ticket } from 'src/model/ticket.model';
import { TicketRepository } from 'src/model/ticket.repository';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'],
})
export class NewTicketComponent implements OnInit {
  public newTicket?: Ticket;
  userId: string = '';
  newTicketForm: FormGroup = new FormGroup({});

  constructor(
    private repository: TicketRepository,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.newTicketForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
    });

    this.userId = JSON.parse(this.authService.getCurrentUser())['userId'];
  }

  // Add new ticket
  addTicket(): void {
    let params = {
      title: this.newTicketForm.get('title')?.value,
      description: this.newTicketForm.get('description')?.value,
      closedOn: null,
      createdBy: this.userId,
      assignedTo: this.userId,
      comments: [],
    };

    this.repository.addTicket(params).subscribe((data) => {
      if (data.status === 200) {
        this.router.navigate(['/tickets']).then(() => {
          window.location.reload();
        });
      } else {
        window.location.reload();
      }
    });
  }
}
