import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/model/ticket.model';
import { TicketRepository } from 'src/model/ticket.repository';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css'],
})
export class EditTicketComponent implements OnInit {
  public id: string = '';
  editTicketForm: FormGroup = new FormGroup({});

  constructor(
    private repository: TicketRepository,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    this.editTicketForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
    });

    if (this.ticket) {
      this.editTicketForm.patchValue({
        title: this.ticket.title,
        description: this.ticket.description,
      });
    }
  }

  get ticket(): Ticket | undefined {
    return this.repository.getTicket(this.id);
  }

  editTicket(): void {
    let params = {
      title: this.editTicketForm.get('title')?.value,
      description: this.editTicketForm.get('description')?.value,
    };
    this.repository.editTicket(this.id, params).subscribe((data) => {
      if (data.status == 200) {
        this.router.navigate(['/tickets']).then(() => {
          window.location.reload();
        });
      } else {
        this.router.navigate(['/edit-ticket', this.id]);
      }
    });
  }
}
