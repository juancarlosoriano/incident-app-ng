import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from 'src/model/model.module';
import { Router, RouterModule } from '@angular/router';
import { EditTicketComponent } from './edit-ticket.component';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [EditTicketComponent],
  exports: [EditTicketComponent],
})
export class EditTicketModule {}
