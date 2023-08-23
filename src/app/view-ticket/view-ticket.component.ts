import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/model/ticket.model';
import { TicketRepository } from 'src/model/ticket.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/model/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css'],
})
export class ViewTicketComponent implements OnInit {
  public id: string = '';
  addCommentForm: FormGroup = new FormGroup({});

  constructor(
    private repository: TicketRepository,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    this.addCommentForm = new FormGroup({
      commentText: new FormControl(''),
    });
  }

  get ticket(): Ticket | any {
    console.log(this.repository.getTicket(this.id));
    return this.repository.getTicket(this.id);
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
          this.router.navigate(['/tickets']).then(() => {
            window.location.reload();
          });
        }
      });
    }
  }

  getUserByIdToString(id: string): string {
    return this.authService.getUserById(id).name;
  }

  formatDateString(str: string): string {
    let date = new Date(str);
    return date.toDateString();
  }

  addComment() {
    let text = this.addCommentForm.get('commentText')?.value;
    let params = {
      commentText: text,
      createdBy: JSON.parse(this.authService.getCurrentUser())['userId'],
    };

    console.log('Params', params);
    if (text) {
      console.log('Comment being added...');
      this.repository.addComment(this.ticket._id, params).subscribe((data) => {
        window.location.reload();
      });
    }
  }
}
