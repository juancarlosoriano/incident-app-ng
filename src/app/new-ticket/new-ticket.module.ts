import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelModule } from 'src/model/model.module';
import { Router, RouterModule } from '@angular/router';
import { NewTicketComponent } from './new-ticket.component';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [NewTicketComponent],
  exports: [NewTicketComponent],
})
export class NewTicketModule {}
